"use client";

import { useEffect } from "react";
import { LEAD_EVENTS, trackEvent } from "@/lib/analytics";

/**
 * Document-level listeners, so every tel:/sms:/mailto: link, Homebot link, RealScout widget, and
 * Calendly embed is tracked without touching each component.
 * RealScout widgets render in shadow DOM; clicks are composed, so the
 * widget host shows up in composedPath(). They count button clicks, not
 * confirmed submissions.
 */
export default function LeadEventTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const path = event.composedPath() as Element[];
      const link = path.find((el) => el instanceof HTMLAnchorElement) as
        | HTMLAnchorElement
        | undefined;
      const href = link?.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackEvent(LEAD_EVENTS.phoneClick, {
          link_url: href,
          page_path: location.pathname,
        });
        return;
      }
      if (href.startsWith("sms:")) {
        trackEvent(LEAD_EVENTS.textClick, {
          link_url: href,
          page_path: location.pathname,
        });
        return;
      }
      if (href.startsWith("mailto:")) {
        trackEvent(LEAD_EVENTS.emailClick, {
          link_url: href,
          page_path: location.pathname,
        });
        return;
      }
      if (href.includes("homebot")) {
        trackEvent(LEAD_EVENTS.homeValueRequest, {
          link_url: href,
          page_path: location.pathname,
        });
        return;
      }

      const clickedButton = path.some(
        (el) =>
          el instanceof HTMLButtonElement ||
          (el instanceof HTMLInputElement && el.type === "submit"),
      );
      if (!clickedButton) return;
      const widget = path.find((el) =>
        el.tagName?.toLowerCase().startsWith("realscout-"),
      );
      const widgetName = widget?.tagName.toLowerCase();
      if (widgetName === "realscout-home-value") {
        trackEvent(LEAD_EVENTS.homeValueRequest, {
          widget: widgetName,
          page_path: location.pathname,
        });
      } else if (widgetName) {
        trackEvent(LEAD_EVENTS.realscoutSearch, {
          widget: widgetName,
          page_path: location.pathname,
        });
      }
    };

    const onMessage = (event: MessageEvent) => {
      if (!event.origin.endsWith("calendly.com")) return;
      if (event.data?.event === "calendly.event_scheduled") {
        trackEvent(LEAD_EVENTS.bookAppointment, {
          method: "calendly",
          page_path: location.pathname,
        });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener("message", onMessage);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return null;
}
