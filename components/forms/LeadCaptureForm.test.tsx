/**
 * Test: LeadCaptureForm Component
 * Critical path: Lead generation functionality
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LeadCaptureForm } from "./LeadCaptureForm";

// Mock fetch globally
global.fetch = vi.fn();

describe("LeadCaptureForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders basic contact form fields", () => {
    render(<LeadCaptureForm />);

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message to dr\. jan/i }),
    ).toBeInTheDocument();
  });

  it("shows property search fields when formType is property-search", () => {
    render(<LeadCaptureForm formType="property-search" />);

    expect(screen.getByLabelText(/min price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/max price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/bedrooms/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/bathrooms/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/timeline/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/pre-approved/i)).toBeInTheDocument();
  });

  it("submits form with valid data", async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();

    // Mock successful API response
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, leadId: "123" }),
    });

    render(<LeadCaptureForm onSuccess={onSuccess} />);

    // Fill out form
    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/phone/i), "7025551234");
    await user.type(screen.getByLabelText(/message/i), "I want to buy a house");

    // Submit form
    await user.click(
      screen.getByRole("button", { name: /send message to dr\. jan/i }),
    );

    // Verify API was called
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/leads/capture",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: expect.stringContaining("john@example.com"),
        }),
      );
    });

    // Verify success callback
    expect(onSuccess).toHaveBeenCalled();

    // Verify success message is displayed
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });

  it("displays error message on API failure", async () => {
    const user = userEvent.setup();
    const onError = vi.fn();

    // Mock failed API response
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Rate limit exceeded" }),
    });

    render(<LeadCaptureForm onError={onError} />);

    // Fill out minimal required fields
    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");

    // Submit form
    await user.click(
      screen.getByRole("button", { name: /send message to dr\. jan/i }),
    );

    // Verify error is displayed
    await waitFor(() => {
      expect(screen.getByText(/rate limit exceeded/i)).toBeInTheDocument();
    });

    // Verify error callback
    expect(onError).toHaveBeenCalledWith("Rate limit exceeded");
  });

  it("disables form while submitting", async () => {
    const user = userEvent.setup();

    // Mock slow API response
    (global.fetch as any).mockImplementationOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                json: async () => ({ success: true }),
              }),
            100,
          ),
        ),
    );

    render(<LeadCaptureForm />);

    // Fill out form
    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");

    // Submit form
    await user.click(
      screen.getByRole("button", { name: /send message to dr\. jan/i }),
    );

    // Verify button is disabled during submission
    expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled();

    // Verify inputs are disabled
    expect(screen.getByLabelText(/first name/i)).toBeDisabled();
  });

  it("requires email field", async () => {
    const user = userEvent.setup();

    render(<LeadCaptureForm />);

    // Try to submit without email
    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");

    const submitButton = screen.getByRole("button", {
      name: /send message to dr\. jan/i,
    });
    await user.click(submitButton);

    // HTML5 validation should prevent submission
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("sends property search data when provided", async () => {
    const user = userEvent.setup();

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<LeadCaptureForm formType="property-search" />);

    // Fill out basic info
    await user.type(screen.getByLabelText(/first name/i), "Jane");
    await user.type(screen.getByLabelText(/last name/i), "Smith");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");

    // Fill out property search criteria
    await user.type(screen.getByLabelText(/min price/i), "400000");
    await user.type(screen.getByLabelText(/max price/i), "600000");
    await user.type(screen.getByLabelText(/bedrooms/i), "3");
    await user.type(screen.getByLabelText(/bathrooms/i), "2.5");

    // Submit
    await user.click(
      screen.getByRole("button", { name: /send message to dr\. jan/i }),
    );

    // Verify property data was sent
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
      const callArg = (global.fetch as any).mock.calls[0][1].body;
      const sentData = JSON.parse(callArg);

      expect(sentData.priceMin).toBe(400000);
      expect(sentData.priceMax).toBe(600000);
      expect(sentData.bedrooms).toBe(3);
      expect(sentData.bathrooms).toBe(2.5);
    });
  });

  it("includes source tracking in submission", async () => {
    const user = userEvent.setup();

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(
      <LeadCaptureForm
        source="hero-section"
        stage="Hot Lead"
        defaultTags={["website", "q1-2026"]}
      />,
    );

    // Fill and submit
    await user.type(screen.getByLabelText(/first name/i), "Test");
    await user.type(screen.getByLabelText(/last name/i), "User");
    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.click(
      screen.getByRole("button", { name: /send message to dr\. jan/i }),
    );

    // Verify source tracking data
    await waitFor(() => {
      const callArg = (global.fetch as any).mock.calls[0][1].body;
      const sentData = JSON.parse(callArg);

      expect(sentData.source).toBe("hero-section");
      expect(sentData.stage).toBe("Hot Lead");
      expect(sentData.tags).toEqual(["website", "q1-2026"]);
    });
  });

  it("resets form after successful submission", async () => {
    const user = userEvent.setup();

    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<LeadCaptureForm />);

    // Fill and submit
    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.click(
      screen.getByRole("button", { name: /send message to dr\. jan/i }),
    );

    // Wait for success
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });

    // Click "Submit Another"
    await user.click(screen.getByRole("button", { name: /submit another/i }));

    // Verify form is reset
    expect(screen.getByLabelText(/first name/i)).toHaveValue("");
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
  });
});
