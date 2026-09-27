#!/usr/bin/env bash
# Upload git-backed images in public/images to Cloudflare Images (hosted).
# Custom IDs match the git path under public/ so mediaUrl() can request
# https://imagedelivery.net/{hash}/{id}/public
# Docs: https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
# Requires: CLOUDFLARE_API_TOKEN
# Optional: CLOUDFLARE_ACCOUNT_ID (defaults to the Images account on this project)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG_DIR="$ROOT/public/images"
ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-2cc579c1ec9e426ed585e933ebf4753b}"

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "CLOUDFLARE_API_TOKEN is not set."
  echo "Git copies in public/images remain the live backup until hosted Images are uploaded."
  echo "HeadingPhoto still prefers imagedelivery.net and falls back to git on 404."
  exit 0
fi

API="https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1"
count=0
skipped=0
failed=0
while IFS= read -r -d '' file; do
  rel="${file#"$ROOT/public/"}"
  echo "Uploading $rel"
  response="$(
    curl -sS -X POST "$API" \
      -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
      -F "file=@${file}" \
      -F "id=${rel}" \
      -F "requireSignedURLs=false"
  )"
  if echo "$response" | grep -q '"success":true'; then
    count=$((count + 1))
  elif echo "$response" | grep -Eqi 'already exists|Duplicate'; then
    echo "  skip (already hosted): $rel"
    skipped=$((skipped + 1))
  else
    echo "  failed: $rel"
    echo "  $response"
    failed=$((failed + 1))
  fi
done < <(find "$IMG_DIR" -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.webp' \) -print0)

echo "Uploaded $count, skipped $skipped, failed $failed."
echo "Delivery: https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<git-path>/public"
if [[ "$failed" -gt 0 ]]; then
  exit 1
fi
