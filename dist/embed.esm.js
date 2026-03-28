/* nfcfyi-embed v1.0.0 | MIT | https://widget.nfcfyi.com */

// src/styles/technical.ts
function getTechnicalCSS() {
  return `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

/* Technical: monospace font throughout */
.tagfyi-widget {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Scan strip header \u2014 matches tag_scan_strip from django-tag-design
   4px left accent border + surface background
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-scan-strip {
  border-left: 4px solid var(--accent);
  background: var(--surface);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.tagfyi-scan-strip-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tagfyi-scan-strip-meta {
  font-size: 11px;
  color: var(--muted);
  margin: 2px 0 0 0;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Key-value rows \u2014 dense, tabular
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-kv-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
}

.tagfyi-kv-row {
  display: table-row;
  border-bottom: 1px solid var(--border);
}

.tagfyi-kv-row:last-child {
  border-bottom: none;
}

.tagfyi-kv-key {
  display: table-cell;
  padding: 8px 12px 8px 16px;
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  width: 40%;
  vertical-align: top;
}

.tagfyi-kv-value {
  display: table-cell;
  padding: 8px 16px 8px 0;
  font-size: 12px;
  font-weight: 400;
  color: var(--text);
  vertical-align: top;
  word-break: break-word;
}

/* Monospace value highlight \u2014 for hex, frequencies, data rates */
.tagfyi-mono-value {
  font-family: inherit; /* already monospace */
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  padding: 1px 5px;
  border-radius: 3px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Standard badge \u2014 ISO/IEC/IEEE/GS1 reference
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-standard-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  background: var(--badge-bg);
  color: var(--badge-text);
  border: 1px solid var(--border);
  font-family: inherit;
  letter-spacing: 0.03em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Frequency visualizer (inline)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-freq-bar-wrap {
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
}

.tagfyi-freq-label {
  font-size: 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
}

.tagfyi-freq-bar-track {
  height: 4px;
  background: var(--surface);
  border-radius: 2px;
  overflow: hidden;
}

.tagfyi-freq-bar-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
  transition: width 0.4s ease;
}

.tagfyi-freq-value {
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  margin-top: 4px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Header (non-scan-strip variant)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
}

.tagfyi-header-text {
  flex: 1;
  min-width: 0;
}

.tagfyi-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 2px 0;
  line-height: 1.3;
  letter-spacing: 0.01em;
}

.tagfyi-subtitle {
  font-size: 11px;
  color: var(--muted);
  margin: 0;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Summary / description text
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-summary {
  padding: 10px 16px;
  font-size: 12px;
  line-height: 1.65;
  color: var(--text);
  border-bottom: 1px solid var(--border);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Action row
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
}

.tagfyi-link {
  font-size: 11px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: inherit;
}

.tagfyi-link:hover {
  text-decoration: underline;
}

.tagfyi-link svg {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
}
  `;
}

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent bar at top */
.tagfyi-accent-bar {
  height: 4px;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #fff));
  width: 100%;
  border-radius: 8px 8px 0 0;
}

/* Header */
.tagfyi-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
}

.tagfyi-header-text {
  flex: 1;
  min-width: 0;
}

.tagfyi-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.tagfyi-subtitle {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

/* Type badge \u2014 gradient pill */
.tagfyi-type-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 11px;
  flex-shrink: 0;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

/* Stats grid \u2014 surface background cards */
.tagfyi-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0 16px 14px;
}

.tagfyi-stat-card {
  background: var(--surface);
  border-radius: 8px;
  padding: 10px 10px;
  text-align: center;
}

.tagfyi-stat-label {
  font-size: 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 3px;
}

.tagfyi-stat-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  line-height: 1;
}

/* Summary */
.tagfyi-summary {
  padding: 4px 20px 14px;
  font-size: 13px;
  line-height: 1.65;
  color: var(--text);
}

/* Key-value rows \u2014 spacious */
.tagfyi-kv-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  padding: 0 4px;
}

.tagfyi-kv-row {
  display: table-row;
}

.tagfyi-kv-key {
  display: table-cell;
  padding: 8px 12px 8px 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  width: 38%;
  vertical-align: top;
}

.tagfyi-kv-value {
  display: table-cell;
  padding: 8px 20px 8px 0;
  font-size: 13px;
  color: var(--text);
  vertical-align: top;
  word-break: break-word;
}

/* Standard badge */
.tagfyi-standard-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  letter-spacing: 0.02em;
}

/* Actions */
.tagfyi-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

.tagfyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.tagfyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.tagfyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "modern":
      return getModernCSS();
    case "technical":
    default:
      return getTechnicalCSS();
  }
}
function getThemeCSS(accent, style = "technical") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.tagfyi-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.tagfyi-widget[data-size="default"] {
  max-width: 420px;
}

.tagfyi-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.tagfyi-widget *, .tagfyi-widget *::before, .tagfyi-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.tagfyi-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: tagfyi-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes tagfyi-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.tagfyi-error p {
  margin: 0 0 8px 0;
}

.tagfyi-error a {
  color: var(--link);
  text-decoration: none;
}

.tagfyi-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-search-wrap {
  padding: 12px 16px;
}

.tagfyi-search-form {
  display: flex;
  gap: 8px;
}

.tagfyi-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.tagfyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.tagfyi-search-input::placeholder {
  color: var(--muted);
}

.tagfyi-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.tagfyi-search-btn:hover {
  opacity: 0.9;
}

/* Search results list */
.tagfyi-search-results {
  padding: 0 16px 12px;
}

.tagfyi-result-item {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.tagfyi-result-item:last-child {
  border-bottom: none;
}

.tagfyi-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.tagfyi-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.tagfyi-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.tagfyi-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tagfyi-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.tagfyi-copy-btn:hover {
  background: var(--copy-hover);
}

.tagfyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.styleVariant || "technical";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["tagfyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="tagfyi-loading">
      <span class="tagfyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="tagfyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
function poweredByHTML(config) {
  return `<span class="tagfyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `tagfyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/widgets/spec.ts
var DISPLAY_FIELDS = [
  "category",
  "family",
  "manufacturer",
  "frequency_band",
  "interface_type",
  "total_memory_bytes",
  "user_memory_bytes",
  "read_range_cm_max",
  "flash_kb",
  "ram_kb",
  "max_ble_version",
  "epc_memory_bits",
  "chip_type",
  "os_type",
  "crypto_algorithms",
  "year_released",
  "typical_price_usd",
  "availability_status"
];
var FIELD_LABELS = {
  category: "Category",
  family: "Family",
  manufacturer: "Manufacturer",
  frequency_band: "Frequency",
  interface_type: "Interface",
  total_memory_bytes: "Total Memory",
  user_memory_bytes: "User Memory",
  read_range_cm_max: "Read Range",
  flash_kb: "Flash",
  ram_kb: "RAM",
  max_ble_version: "BLE Version",
  epc_memory_bits: "EPC Memory",
  chip_type: "Chip Type",
  os_type: "OS Type",
  crypto_algorithms: "Crypto",
  year_released: "Year",
  typical_price_usd: "Typical Price",
  availability_status: "Availability"
};
var FIELD_UNITS = {
  total_memory_bytes: " B",
  user_memory_bytes: " B",
  read_range_cm_max: " cm",
  flash_kb: " KB",
  ram_kb: " KB",
  epc_memory_bits: " bits",
  typical_price_usd: " USD"
};
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function formatValue(key, value) {
  var _a;
  if (value === null || value === void 0) return "";
  const unit = (_a = FIELD_UNITS[key]) != null ? _a : "";
  if (Array.isArray(value)) {
    return escapeHTML(value.join(", "));
  }
  return escapeHTML(String(value)) + unit;
}
function initSpecWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  const apiPath = `${config.entitySlug}/${slug}/`;
  fetchAPI(config.apiBase, apiPath).then((data) => {
    renderSpec(container, data, slug, config);
  }).catch(() => {
    renderError(container, `Unable to load spec for "${escapeHTML(slug)}". Please try again later.`, config);
  });
}
function renderSpec(container, data, slug, config) {
  const name = data.name ? escapeHTML(String(data.name)) : escapeHTML(slug);
  const category = data.category ? escapeHTML(String(data.category)) : "";
  const family = data.family ? escapeHTML(String(data.family)) : "";
  const badgeText = category || family;
  const entityUrl = `https://${config.domain}/${config.entitySlug}/${slug}/`;
  const rows = DISPLAY_FIELDS.filter((key) => {
    const val = data[key];
    return val !== null && val !== void 0 && val !== "" && key !== "category" && key !== "family";
  }).map((key) => {
    var _a;
    const label = escapeHTML((_a = FIELD_LABELS[key]) != null ? _a : key.replace(/_/g, " "));
    const value = formatValue(key, data[key]);
    const isNumeric = typeof data[key] === "number";
    const valueHTML = isNumeric ? `<span class="tagfyi-mono-value">${value}</span>` : value;
    return `
        <div class="tagfyi-kv-row">
          <div class="tagfyi-kv-key">${label}</div>
          <div class="tagfyi-kv-value">${valueHTML}</div>
        </div>`;
  }).join("");
  container.innerHTML = `
    <div class="tagfyi-scan-strip">
      <div class="tagfyi-header-text">
        <p class="tagfyi-scan-strip-title">${name}</p>
        ${badgeText ? `<p class="tagfyi-scan-strip-meta">${badgeText}</p>` : ""}
      </div>
      ${badgeText ? `<span class="tagfyi-badge">${badgeText}</span>` : ""}
    </div>

    <div class="tagfyi-kv-table">
      ${rows || '<div class="tagfyi-kv-row"><div class="tagfyi-kv-value" style="padding-left:16px;color:var(--muted)">No spec data available.</div></div>'}
    </div>

    <div class="tagfyi-actions">
      <a class="tagfyi-link" href="${entityUrl}" target="_blank" rel="noopener">
        Full spec on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/compare.ts
function escapeHTML2(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var COMPARE_FIELDS = [
  ["Memory", "memory_bytes"],
  ["Memory (user)", "user_memory_bytes"],
  ["Frequency", "frequency"],
  ["Standard", "standard"],
  ["Max Range", "max_range_cm"],
  ["Data Rate", "data_rate_kbps"],
  ["IC Type", "ic_type"],
  ["Form Factor", "form_factor"],
  ["Operating Voltage", "operating_voltage"],
  ["Protocol", "protocol"],
  ["Category", "category"],
  ["Version", "version"]
];
function formatValue2(val) {
  if (val === null || val === void 0 || val === "") return "\u2014";
  if (typeof val === "boolean") return val ? "\u2713" : "\u2717";
  if (typeof val === "number") return String(val);
  if (typeof val === "object") return JSON.stringify(val);
  return String(val);
}
function initCompareWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slugsRaw = (_a = dataset.slugs) != null ? _a : "";
  const slugs = slugsRaw.split(",").map((s) => s.trim()).filter(Boolean);
  if (slugs.length < 2) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "tagfyi-compare-widget");
    renderError(container2, 'Provide at least 2 slugs in data-slugs="a,b"', config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-compare-widget");
  renderLoading(container);
  Promise.all(
    slugs.map(
      (slug) => fetchAPI(config.apiBase, `${config.entitySlug}/${slug}/`)
    )
  ).then((entities) => {
    const presentFields = COMPARE_FIELDS.filter(
      ([, field]) => entities.some(
        (e) => e[field] !== null && e[field] !== void 0 && e[field] !== ""
      )
    );
    const colWidth = Math.floor(100 / (entities.length + 1));
    let html = `
        <div class="tagfyi-scan-strip">
          <div>
            <p class="tagfyi-scan-strip-title">Comparison</p>
            <p class="tagfyi-scan-strip-meta">${entities.length} items \xB7 ${config.name}</p>
          </div>
        </div>
        <div class="tagfyi-compare-scroll">
          <table class="tagfyi-compare-table">
            <thead>
              <tr>
                <th class="tagfyi-compare-th tagfyi-compare-th--label" style="width:${colWidth}%">Spec</th>
                ${entities.map(
      (e) => `
                  <th class="tagfyi-compare-th" style="width:${colWidth}%">
                    <a href="https://${config.domain}/${config.entitySlug}/${escapeHTML2(e.slug)}/" target="_blank" rel="noopener" class="tagfyi-compare-entity-link">
                      ${escapeHTML2(String(e.name))}
                      ${externalLinkIcon}
                    </a>
                  </th>`
    ).join("")}
              </tr>
            </thead>
            <tbody>
              ${presentFields.map(
      ([label, field]) => `
                <tr class="tagfyi-compare-row">
                  <td class="tagfyi-kv-key">${escapeHTML2(label)}</td>
                  ${entities.map((e) => {
        const val = formatValue2(e[field]);
        const isMonoField = field.includes("bytes") || field.includes("kbps") || field.includes("_cm") || field.includes("voltage") || field.includes("frequency");
        return `<td class="tagfyi-compare-td">${isMonoField ? `<span class="tagfyi-mono-value">${escapeHTML2(val)}</span>` : escapeHTML2(val)}</td>`;
      }).join("")}
                </tr>`
    ).join("")}
            </tbody>
          </table>
        </div>
        ${poweredByHTML(config)}
      `;
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, "Failed to load comparison data.", config);
  });
}

// src/widgets/features.ts
function escapeHTML3(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var FEATURE_DEFS = [
  // Security
  { label: "Password Protection", field: "has_password_protection", category: "Security" },
  { label: "AES Encryption", field: "has_aes_encryption", category: "Security" },
  { label: "Mutual Authentication", field: "has_mutual_authentication", category: "Security" },
  { label: "Read/Write Protection", field: "has_read_write_protection", category: "Security" },
  { label: "Originality Check", field: "has_originality_check", category: "Security" },
  { label: "UID Mirroring", field: "has_uid_mirroring", category: "Security" },
  { label: "Counter/CMAC", field: "has_counter", category: "Security" },
  // Compatibility
  { label: "NFC Forum Compliant", field: "nfc_forum_compliant", category: "Compatibility" },
  { label: "Android Compatible", field: "android_compatible", category: "Compatibility" },
  { label: "iOS Compatible", field: "ios_compatible", category: "Compatibility" },
  { label: "Windows Compatible", field: "windows_compatible", category: "Compatibility" },
  { label: "NDEF Support", field: "supports_ndef", category: "Compatibility" },
  { label: "ISO 14443-4 Compliant", field: "iso_14443_4", category: "Compatibility" },
  // Protocol
  { label: "ISO 15693", field: "supports_iso15693", category: "Protocol" },
  { label: "ISO 14443-A", field: "supports_iso14443a", category: "Protocol" },
  { label: "ISO 14443-B", field: "supports_iso14443b", category: "Protocol" },
  { label: "Zigbee", field: "supports_zigbee", category: "Protocol" },
  { label: "Thread", field: "supports_thread", category: "Protocol" },
  { label: "Matter", field: "supports_matter", category: "Protocol" },
  { label: "Bluetooth LE", field: "supports_ble", category: "Protocol" },
  { label: "EPC Gen2", field: "supports_epc_gen2", category: "Protocol" },
  // General
  { label: "Anti-Collision", field: "has_anti_collision", category: "General" },
  { label: "Fast Read", field: "has_fast_read", category: "General" },
  { label: "Field Detect", field: "has_field_detect", category: "General" }
];
var CATEGORY_ORDER = ["Security", "Compatibility", "Protocol", "General"];
function initFeaturesWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "tagfyi-features-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-features-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `${config.entitySlug}/${slug}/`).then((entity) => {
    const presentFeatures = FEATURE_DEFS.filter(
      (f) => typeof entity[f.field] === "boolean"
    );
    if (presentFeatures.length === 0) {
      renderError(container, "No feature data available for this entity.", config);
      return;
    }
    const grouped = /* @__PURE__ */ new Map();
    for (const cat of CATEGORY_ORDER) {
      const items = presentFeatures.filter((f) => f.category === cat);
      if (items.length > 0) {
        grouped.set(cat, items);
      }
    }
    const entityUrl = `https://${config.domain}/${config.entitySlug}/${escapeHTML3(entity.slug)}/`;
    let html = `
        <div class="tagfyi-scan-strip">
          <div class="tagfyi-header-text">
            <p class="tagfyi-scan-strip-title">${escapeHTML3(String(entity.name))}</p>
            <p class="tagfyi-scan-strip-meta">Feature Matrix</p>
          </div>
          <a href="${entityUrl}" target="_blank" rel="noopener" class="tagfyi-link" aria-label="View on ${config.name}">
            ${externalLinkIcon}
          </a>
        </div>
      `;
    for (const [cat, features] of grouped) {
      html += `
          <div class="tagfyi-feature-group">
            <div class="tagfyi-feature-group-label">${escapeHTML3(cat)}</div>
            ${features.map((f) => {
        const val = entity[f.field];
        return `
                  <div class="tagfyi-feature-row">
                    <span class="tagfyi-feature-name">${escapeHTML3(f.label)}</span>
                    <span class="tagfyi-feature-check tagfyi-feature-check--${val ? "yes" : "no"}" aria-label="${val ? "Supported" : "Not supported"}">
                      ${val ? "\u2713" : "\u2717"}
                    </span>
                  </div>
                `;
      }).join("")}
          </div>
        `;
    }
    html += poweredByHTML(config);
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, "Failed to load feature data.", config);
  });
}

// src/widgets/standard.ts
function escapeHTML4(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var STATUS_COLORS = {
  active: "#10b981",
  current: "#10b981",
  published: "#10b981",
  draft: "#f59e0b",
  withdrawn: "#ef4444",
  deprecated: "#ef4444",
  superseded: "#6b7280",
  historical: "#6b7280"
};
function initStandardWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "tagfyi-standard-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-standard-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `standards/${slug}/`).then((standard) => {
    var _a2, _b;
    const statusRaw = ((_a2 = standard.status) != null ? _a2 : "").toLowerCase();
    const statusColor = (_b = STATUS_COLORS[statusRaw]) != null ? _b : "#6b7280";
    const standardUrl = `https://${config.domain}/standards/${escapeHTML4(standard.slug)}/`;
    const displayName = standard.number ? `${escapeHTML4(standard.number)}` : escapeHTML4(String(standard.name));
    const fullName = standard.full_name ? escapeHTML4(standard.full_name) : escapeHTML4(String(standard.name));
    let html = `
        <div class="tagfyi-scan-strip">
          <div class="tagfyi-header-text">
            <p class="tagfyi-scan-strip-title">
              <span class="tagfyi-standard-badge">${displayName}</span>
            </p>
            <p class="tagfyi-scan-strip-meta">${fullName}</p>
          </div>
          <a href="${standardUrl}" target="_blank" rel="noopener" class="tagfyi-link" aria-label="View standard on ${config.name}">
            ${externalLinkIcon}
          </a>
        </div>
      `;
    const metaParts = [];
    if (standard.status) {
      metaParts.push(
        `<span class="tagfyi-status-dot" style="background:${statusColor}" title="${escapeHTML4(standard.status)}"></span><span>${escapeHTML4(standard.status.charAt(0).toUpperCase() + standard.status.slice(1))}</span>`
      );
    }
    if (standard.organization) {
      metaParts.push(`<span class="tagfyi-standard-badge">${escapeHTML4(standard.organization)}</span>`);
    }
    if (standard.year_published) {
      metaParts.push(`<span class="tagfyi-badge">${escapeHTML4(String(standard.year_published))}</span>`);
    }
    if (metaParts.length > 0) {
      html += `
          <div class="tagfyi-standard-meta-row">
            ${metaParts.join("")}
          </div>
        `;
    }
    if (standard.description) {
      html += `<div class="tagfyi-summary">${escapeHTML4(standard.description)}</div>`;
    }
    html += `
        <div class="tagfyi-actions">
          <a href="${standardUrl}" target="_blank" rel="noopener" class="tagfyi-link">
            View standard ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, `Standard "${escapeHTML4(slug)}" not found.`, config);
  });
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-tagfyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-tagfyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
function injectFAQPage(data, domain, siteName) {
  if (document.querySelector('script[data-tagfyi-snippet="faq"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: `${siteName} FAQ`,
    url: `https://${domain}/faqs/`,
    mainEntity: [
      {
        "@type": "Question",
        name: data.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: data.answer
        }
      }
    ]
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-tagfyi-snippet", "faq");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function escapeHTML5(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initGlossaryWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const term = (_a = dataset.term) != null ? _a : "";
  if (!term) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-term attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, `glossary/${term}/`).then((data) => {
    renderGlossary(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      injectDefinedTerm(
        { name: data.name, definition: data.definition },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load glossary term "${escapeHTML5(term)}". Please try again later.`,
      config
    );
  });
}
function renderGlossary(container, data, config) {
  const termUrl = `https://${config.domain}/glossary/${data.slug}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const relatedPills = data.related_terms && data.related_terms.length > 0 ? data.related_terms.map(
    (rt) => `<a class="tagfyi-pill" href="https://${config.domain}/glossary/${escapeHTML5(rt.slug)}/" target="_blank" rel="noopener">${escapeHTML5(rt.name)}</a>`
  ).join("") : "";
  container.innerHTML = `
    <div class="tagfyi-scan-strip">
      <div class="tagfyi-header-text">
        <p class="tagfyi-scan-strip-title">${escapeHTML5(data.name)}</p>
        <p class="tagfyi-scan-strip-meta">Glossary term</p>
      </div>
    </div>

    <div class="tagfyi-summary">
      ${escapeHTML5(data.definition)}
    </div>

    ${relatedPills ? `<div class="tagfyi-pills-row">${relatedPills}</div>` : ""}

    <div class="tagfyi-actions">
      <a class="tagfyi-link" href="${glossaryUrl}" target="_blank" rel="noopener">
        See full glossary on ${escapeHTML5(config.name)} ${externalLinkIcon}
      </a>
      <a class="tagfyi-link" href="${termUrl}" target="_blank" rel="noopener">
        ${escapeHTML5(data.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/tooltip.ts
function escapeHTML6(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initTooltipWidget(el, config) {
  var _a, _b, _c;
  const dataset = el.dataset;
  const term = (_c = (_b = dataset.term) != null ? _b : (_a = el.textContent) == null ? void 0 : _a.trim()) != null ? _c : "";
  if (!term) return;
  const htmlEl = el;
  htmlEl.style.cursor = "help";
  htmlEl.style.textDecoration = "underline dotted";
  htmlEl.style.textUnderlineOffset = "2px";
  htmlEl.setAttribute("tabindex", "0");
  htmlEl.setAttribute("role", "button");
  htmlEl.setAttribute("aria-describedby", `tagfyi-tooltip-${term}`);
  const popup = document.createElement("div");
  popup.id = `tagfyi-tooltip-${term}`;
  popup.setAttribute("role", "tooltip");
  popup.style.cssText = [
    "position:absolute",
    "z-index:999999",
    "max-width:280px",
    "min-width:180px",
    "background:#1e293b",
    "color:#f1f5f9",
    "border-radius:8px",
    "padding:10px 14px",
    "font-size:12px",
    "line-height:1.6",
    "box-shadow:0 4px 16px rgba(0,0,0,0.3)",
    "pointer-events:none",
    "opacity:0",
    "transition:opacity 0.15s",
    "font-family:system-ui,-apple-system,sans-serif",
    "word-break:break-word"
  ].join(";");
  popup.innerHTML = `<span style="color:#94a3b8;font-size:10px;text-transform:uppercase;letter-spacing:0.06em">Loading\u2026</span>`;
  document.body.appendChild(popup);
  let loaded = false;
  let glossaryData = null;
  let visible = false;
  let hideTimer = null;
  function positionPopup() {
    const rect = htmlEl.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    const popupH = popup.offsetHeight || 80;
    if (spaceAbove >= popupH + 8 || spaceAbove > spaceBelow) {
      popup.style.top = `${rect.top + scrollTop - popupH - 8}px`;
    } else {
      popup.style.top = `${rect.bottom + scrollTop + 8}px`;
    }
    let left = rect.left + scrollLeft + rect.width / 2 - 140;
    left = Math.max(8, Math.min(left, window.innerWidth - 296));
    popup.style.left = `${left}px`;
  }
  function showPopup() {
    if (hideTimer !== null) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    visible = true;
    positionPopup();
    popup.style.opacity = "1";
    if (!loaded) {
      fetchAPI(config.apiBase, `glossary/${encodeURIComponent(term)}/`).then((data) => {
        glossaryData = data;
        loaded = true;
        const termUrl = `https://${config.domain}/glossary/${escapeHTML6(data.slug)}/`;
        popup.innerHTML = `
            <div style="font-weight:600;margin-bottom:4px;color:#f8fafc">${escapeHTML6(data.term)}</div>
            <div style="color:#cbd5e1">${escapeHTML6(data.definition)}</div>
            <div style="margin-top:6px">
              <a href="${termUrl}" target="_blank" rel="noopener"
                 style="font-size:11px;color:${config.accent};text-decoration:none;font-weight:500">
                View full definition \u2192
              </a>
            </div>
          `;
        positionPopup();
      }).catch(() => {
        loaded = true;
        popup.innerHTML = `<span style="color:#94a3b8">${escapeHTML6(term)}: definition not found.</span>`;
      });
    }
  }
  function hidePopup() {
    hideTimer = setTimeout(() => {
      visible = false;
      popup.style.opacity = "0";
    }, 150);
  }
  htmlEl.addEventListener("mouseenter", showPopup);
  htmlEl.addEventListener("mouseleave", hidePopup);
  htmlEl.addEventListener("focus", showPopup);
  htmlEl.addEventListener("blur", hidePopup);
  htmlEl.addEventListener("click", () => {
    if (glossaryData) {
      const termUrl = `https://${config.domain}/glossary/${glossaryData.slug}/`;
      window.open(termUrl, "_blank", "noopener");
    } else {
      const url = `https://${config.domain}/glossary/`;
      window.open(url, "_blank", "noopener");
    }
  });
  htmlEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      htmlEl.click();
    }
  });
  window.addEventListener("scroll", () => {
    if (visible) positionPopup();
  }, { passive: true });
  htmlEl.dataset.tagfyiTooltipInit = "1";
  try {
    el.attachShadow({ mode: "closed" });
  } catch (e) {
  }
}

// src/widgets/faq.ts
function escapeHTML7(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initFaqWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, `faqs/${slug}/`).then((data) => {
    renderFaq(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      injectFAQPage(
        { question: data.question, answer: data.answer },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load FAQ "${escapeHTML7(slug)}". Please try again later.`,
      config
    );
  });
}
function renderFaq(container, data, config) {
  const faqUrl = `https://${config.domain}/faqs/${data.slug}/`;
  const faqsUrl = `https://${config.domain}/faqs/`;
  container.innerHTML = `
    <div class="tagfyi-scan-strip">
      <div class="tagfyi-header-text">
        <p class="tagfyi-scan-strip-title">${escapeHTML7(data.question)}</p>
        <p class="tagfyi-scan-strip-meta">Frequently Asked Question</p>
      </div>
    </div>

    <div class="tagfyi-summary">
      ${escapeHTML7(data.answer)}
    </div>

    <div class="tagfyi-actions">
      <a class="tagfyi-link" href="${faqsUrl}" target="_blank" rel="noopener">
        More FAQs on ${escapeHTML7(config.name)} ${externalLinkIcon}
      </a>
      <a class="tagfyi-link" href="${faqUrl}" target="_blank" rel="noopener">
        Full answer ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/guide.ts
function escapeHTML8(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initGuideWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "tagfyi-guide-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-guide-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `guides/${slug}/`).then((guide) => {
    var _a2, _b, _c, _d, _e, _f;
    const guideUrl = guide.url ? `https://${config.domain}${guide.url}` : `https://${config.domain}/guides/${escapeHTML8(guide.slug)}/`;
    const excerpt = (_b = (_a2 = guide.excerpt) != null ? _a2 : guide.description) != null ? _b : "";
    const readingTime = (_d = (_c = guide.reading_time_minutes) != null ? _c : guide.reading_time) != null ? _d : null;
    const category = (_f = (_e = guide.category_name) != null ? _e : guide.category) != null ? _f : null;
    let html = `
        <div class="tagfyi-guide-card">
          <div class="tagfyi-guide-header">
            <div class="tagfyi-guide-badges">
              ${category ? `<span class="tagfyi-badge">${escapeHTML8(category)}</span>` : ""}
              ${readingTime ? `<span class="tagfyi-badge tagfyi-badge--time">${escapeHTML8(String(readingTime))} min read</span>` : ""}
            </div>
            <h3 class="tagfyi-guide-title">${escapeHTML8(String(guide.title))}</h3>
          </div>
          ${excerpt ? `<p class="tagfyi-guide-excerpt">${escapeHTML8(excerpt)}</p>` : ""}
          <div class="tagfyi-guide-footer">
            <a href="${guideUrl}" target="_blank" rel="noopener" class="tagfyi-guide-cta">
              Read on ${escapeHTML8(config.name)}
              ${externalLinkIcon}
            </a>
          </div>
        </div>
        ${poweredByHTML(config)}
      `;
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, `Guide "${escapeHTML8(slug)}" not found.`, config);
  });
}

// src/widgets/search.ts
function escapeHTML9(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var TYPE_LABELS = {
  chip: "Chip",
  tag: "Tag",
  standard: "Standard",
  glossary: "Glossary",
  guide: "Guide",
  frequency: "Frequency",
  protocol: "Protocol",
  barcode: "Barcode",
  qrcode: "QR Code",
  nfc: "NFC",
  rfid: "RFID",
  ble: "BLE",
  smartcard: "Smart Card"
};
var SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : `Search ${config.entityName}\u2026`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="tagfyi-search-wrap">
      <div class="tagfyi-search-form tagfyi-search-form--inline">
        <span class="tagfyi-search-icon" aria-hidden="true">${SEARCH_ICON}</span>
        <input
          class="tagfyi-search-input tagfyi-search-input--inline"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${escapeHTML9(placeholder)}"
          aria-label="Search ${escapeHTML9(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
        >
      </div>
      <div class="tagfyi-search-dropdown" role="listbox" hidden></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".tagfyi-search-input");
  const dropdown = container.querySelector(".tagfyi-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".tagfyi-search-result-item"));
  }
  function setSelectedIndex(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      if (i === idx) {
        item.classList.add("tagfyi-search-result-item--active");
      } else {
        item.classList.remove("tagfyi-search-result-item--active");
      }
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2, _b, _c;
    if (results.length === 0) {
      dropdown.innerHTML = `
        <div class="tagfyi-search-empty">
          No results for <strong>${escapeHTML9(query)}</strong>
        </div>
      `;
      return;
    }
    let html = "";
    for (const item of results) {
      const typeLabel = item.type ? (_a2 = TYPE_LABELS[item.type]) != null ? _a2 : item.type : null;
      const desc = (_c = (_b = item.description) != null ? _b : item.excerpt) != null ? _c : "";
      const href = item.url ? `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML9(item.slug)}/`;
      html += `
        <a
          class="tagfyi-search-result-item"
          href="${href}"
          target="_blank"
          rel="noopener"
          role="option"
          tabindex="-1"
        >
          <div class="tagfyi-search-result-row">
            <span class="tagfyi-result-title">${escapeHTML9(item.name)}</span>
            ${typeLabel ? `<span class="tagfyi-badge">${escapeHTML9(typeLabel)}</span>` : ""}
          </div>
          ${desc ? `<div class="tagfyi-result-meta">${escapeHTML9(desc)}</div>` : ""}
        </a>
      `;
    }
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchUrl = `https://${config.domain}/api/v1/search/?q=${encodeURIComponent(q)}`;
    try {
      const response = await fetch(searchUrl, {
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelectedIndex(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        const siteSearchUrl = `https://${config.domain}/search/?q=${encodeURIComponent(query)}`;
        window.open(siteSearchUrl, "_blank", "noopener");
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (!isOpen) return;
    if (!el.contains(e.target)) {
      closeDropdown();
    }
  });
}

// src/widgets/frequency.ts
function escapeHTML10(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var BAND_DATA = {
  lf: {
    name: "LF",
    fullName: "Low Frequency",
    range: "125 \u2013 134 kHz",
    color: "#10b981",
    // emerald
    barPercent: 8,
    wavelength: "~2.4 km",
    commonUse: "Animal tracking, access control, older RFID",
    protocols: ["ISO 11784", "ISO 11785", "EM4100"]
  },
  hf: {
    name: "HF",
    fullName: "High Frequency",
    range: "13.56 MHz",
    color: "#0ea5e9",
    // sky
    barPercent: 25,
    wavelength: "22.1 m",
    commonUse: "NFC, smart cards, library tags",
    protocols: ["ISO 14443", "ISO 15693", "NFC Forum"]
  },
  uhf: {
    name: "UHF",
    fullName: "Ultra High Frequency",
    range: "860 \u2013 960 MHz",
    color: "#d97706",
    // amber
    barPercent: 55,
    wavelength: "33 \u2013 35 cm",
    commonUse: "Supply chain, retail, logistics RFID",
    protocols: ["EPC Gen2", "ISO 18000-63", "GS1 EPC"]
  },
  shf: {
    name: "SHF",
    fullName: "Super High Frequency",
    range: "2.45 \u2013 5.8 GHz",
    color: "#ef4444",
    // red
    barPercent: 80,
    wavelength: "5 \u2013 12 cm",
    commonUse: "Active RFID, microwave RFID, sensing",
    protocols: ["IEEE 802.11 (Wi-Fi)", "Zigbee", "DSRC"]
  },
  ble: {
    name: "BLE",
    fullName: "Bluetooth Low Energy",
    range: "2.4 GHz",
    color: "#06B6D4",
    // cyan (BLE FYI accent)
    barPercent: 78,
    wavelength: "~12.5 cm",
    commonUse: "Beacons, IoT sensors, wearables, asset tracking",
    protocols: ["Bluetooth 5.x", "iBeacon", "Eddystone", "AltBeacon"]
  },
  nfc: {
    name: "NFC",
    fullName: "Near Field Communication",
    range: "13.56 MHz",
    color: "#0ea5e9",
    // sky — same as HF
    barPercent: 25,
    wavelength: "22.1 m",
    commonUse: "Contactless payments, transit, smart tags",
    protocols: ["NFC-A", "NFC-B", "NFC-F", "NFC-V", "ISO 14443"]
  },
  wifi: {
    name: "Wi-Fi",
    fullName: "Wi-Fi (802.11)",
    range: "2.4 / 5 / 6 GHz",
    color: "#6366f1",
    // indigo
    barPercent: 82,
    wavelength: "5 \u2013 12 cm",
    commonUse: "Wireless LAN, IoT gateways, high-bandwidth devices",
    protocols: ["802.11b/g/n/ac/ax", "WPA3"]
  },
  zigbee: {
    name: "Zigbee",
    fullName: "Zigbee (802.15.4)",
    range: "2.4 GHz",
    color: "#8b5cf6",
    // violet
    barPercent: 78,
    wavelength: "~12.5 cm",
    commonUse: "Smart home mesh networks, industrial IoT",
    protocols: ["IEEE 802.15.4", "Zigbee Alliance", "Thread"]
  }
};
function initFrequencyWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const bandKey = ((_a = dataset.band) != null ? _a : "").toLowerCase().trim();
  const band = BAND_DATA[bandKey];
  if (!band) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "tagfyi-frequency-widget");
    const validBands = Object.keys(BAND_DATA).join(", ");
    renderError(
      container2,
      `Unknown band "${escapeHTML10(bandKey)}". Valid: ${escapeHTML10(validBands)}.`,
      config
    );
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-frequency-widget");
  const html = `
    <div class="tagfyi-scan-strip">
      <div class="tagfyi-header-text">
        <p class="tagfyi-scan-strip-title">
          <span class="tagfyi-freq-name-badge" style="background:${band.color};color:#fff">
            ${escapeHTML10(band.name)}
          </span>
          ${escapeHTML10(band.fullName)}
        </p>
        <p class="tagfyi-scan-strip-meta">Radio Frequency Band \xB7 ${escapeHTML10(config.name)}</p>
      </div>
    </div>

    <div class="tagfyi-freq-bar-wrap">
      <div class="tagfyi-freq-label">Frequency Spectrum Position</div>
      <div class="tagfyi-freq-bar-track">
        <div class="tagfyi-freq-bar-fill" style="width:${band.barPercent}%;background:${band.color}"></div>
      </div>
      <div class="tagfyi-freq-value" style="color:${band.color}">${escapeHTML10(band.range)}</div>
    </div>

    <div class="tagfyi-kv-table">
      <div class="tagfyi-kv-row">
        <div class="tagfyi-kv-key">Wavelength</div>
        <div class="tagfyi-kv-value">
          <span class="tagfyi-mono-value">${escapeHTML10(band.wavelength)}</span>
        </div>
      </div>
      <div class="tagfyi-kv-row">
        <div class="tagfyi-kv-key">Common Use</div>
        <div class="tagfyi-kv-value">${escapeHTML10(band.commonUse)}</div>
      </div>
      <div class="tagfyi-kv-row">
        <div class="tagfyi-kv-key">Protocols</div>
        <div class="tagfyi-kv-value">
          ${band.protocols.map((p) => `<span class="tagfyi-standard-badge">${escapeHTML10(p)}</span>`).join(" ")}
        </div>
      </div>
    </div>

    ${poweredByHTML(config)}
  `;
  container.innerHTML = html;
}

// src/tools/ndef-inspector.ts
function escapeHTML11(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var TNF_NAMES = {
  0: "Empty",
  1: "Well-Known (NFC RTD)",
  2: "MIME Media",
  3: "Absolute URI",
  4: "External (NFC RTD)",
  5: "Unknown",
  6: "Unchanged (chunked)",
  7: "Reserved"
};
var URI_PREFIXES = {
  0: "",
  1: "http://www.",
  2: "https://www.",
  3: "http://",
  4: "https://",
  5: "tel:",
  6: "mailto:",
  7: "ftp://anonymous:anonymous@",
  8: "ftp://ftp.",
  9: "ftps://",
  10: "sftp://",
  11: "smb://",
  12: "nfs://",
  13: "ftp://",
  14: "dav://",
  15: "news:",
  16: "telnet://",
  17: "imap:",
  18: "rtsp://",
  19: "urn:",
  20: "pop:",
  21: "sip:",
  22: "sips:",
  23: "tftp:",
  24: "btspp://",
  25: "btl2cap://",
  26: "btgoep://",
  27: "tcpobex://",
  28: "irdaobex://",
  29: "file://",
  30: "urn:epc:id:",
  31: "urn:epc:tag:",
  32: "urn:epc:pat:",
  33: "urn:epc:raw:",
  34: "urn:epc:",
  35: "urn:nfc:"
};
function bytesToText(bytes) {
  try {
    return new TextDecoder("utf-8").decode(new Uint8Array(bytes));
  } catch (e) {
    return bytes.map((b) => b.toString(16).padStart(2, "0")).join(" ");
  }
}
function decodeTextRecord(payload) {
  if (payload.length < 1) return "(empty)";
  const statusByte = payload[0];
  const langLen = statusByte & 63;
  const isUtf16 = !!(statusByte & 128);
  if (payload.length < 1 + langLen) return "(malformed text record)";
  const lang = bytesToText(payload.slice(1, 1 + langLen));
  const textBytes = payload.slice(1 + langLen);
  let text;
  try {
    const encoding = isUtf16 ? "utf-16" : "utf-8";
    text = new TextDecoder(encoding).decode(new Uint8Array(textBytes));
  } catch (e) {
    text = bytesToText(textBytes);
  }
  return `[${lang}] ${text}`;
}
function decodeURIRecord(payload) {
  var _a;
  if (payload.length < 1) return "(empty)";
  const prefix = (_a = URI_PREFIXES[payload[0]]) != null ? _a : "";
  const rest = bytesToText(payload.slice(1));
  return prefix + rest;
}
function decodePayload(tnf, typeBytes, payload) {
  var _a;
  const typeName = bytesToText(typeBytes).trim();
  if (tnf === 1) {
    if (typeName === "T") {
      const decoded = decodeTextRecord(payload);
      return { decoded, fields: [{ label: "Text", value: decoded }] };
    }
    if (typeName === "U") {
      const decoded = decodeURIRecord(payload);
      return { decoded, fields: [{ label: "URI", value: decoded, mono: true }] };
    }
    if (typeName === "Sp") {
      return { decoded: "(Smart Poster \u2014 nested NDEF)", fields: [{ label: "Type", value: "Smart Poster (Sp)" }] };
    }
    if (typeName === "act") {
      const action = payload[0];
      const actionNames = { 0: "Do Action", 1: "Save for Later", 2: "Open for Editing" };
      const decoded = (_a = actionNames[action]) != null ? _a : `0x${action == null ? void 0 : action.toString(16).padStart(2, "0")}`;
      return { decoded, fields: [{ label: "Action", value: decoded, mono: true }] };
    }
    return { decoded: `Well-Known/${typeName}`, fields: [{ label: "Type", value: typeName, mono: true }, { label: "Payload", value: payload.map((b) => b.toString(16).padStart(2, "0")).join(" ") }] };
  }
  if (tnf === 2) {
    try {
      const text = new TextDecoder("utf-8").decode(new Uint8Array(payload));
      return { decoded: text.substring(0, 80), fields: [{ label: "MIME", value: typeName, mono: true }, { label: "Content", value: text.substring(0, 200) }] };
    } catch (e) {
      return { decoded: typeName, fields: [{ label: "MIME", value: typeName, mono: true }] };
    }
  }
  if (tnf === 3) {
    const uri = bytesToText(typeBytes);
    return { decoded: uri, fields: [{ label: "URI", value: uri, mono: true }] };
  }
  if (tnf === 4) {
    return { decoded: typeName, fields: [{ label: "External Type", value: typeName, mono: true }, { label: "Payload Bytes", value: payload.length.toString() }] };
  }
  const hexSnippet = payload.slice(0, 16).map((b) => b.toString(16).padStart(2, "0")).join(" ");
  return { decoded: hexSnippet + (payload.length > 16 ? "\u2026" : ""), fields: [{ label: "Payload (hex)", value: hexSnippet, mono: true }] };
}
function parseNDEF(hex) {
  var _a, _b;
  const clean = hex.replace(/[\s:]/g, "").toLowerCase();
  if (!/^[0-9a-f]*$/.test(clean)) return "Invalid hex input \u2014 only hex digits (0-9, a-f), spaces and colons allowed.";
  if (clean.length % 2 !== 0) return "Odd number of hex digits \u2014 each byte requires 2 hex digits.";
  if (clean.length === 0) return "Empty input.";
  const bytes = clean.match(/.{2}/g).map((b) => parseInt(b, 16));
  let offset = 0;
  let ndefBytes = bytes;
  if (bytes[0] === 3) {
    const lenByte = bytes[1];
    if (lenByte === 255) {
      if (bytes.length < 5) return "Malformed TLV: insufficient bytes for 3-byte length.";
      const len = bytes[2] << 8 | bytes[3];
      offset = 4;
      ndefBytes = bytes.slice(offset, offset + len);
    } else {
      offset = 2;
      ndefBytes = bytes.slice(offset, offset + lenByte);
    }
  }
  const records = [];
  let pos = 0;
  let index = 0;
  while (pos < ndefBytes.length) {
    if (pos + 2 > ndefBytes.length) break;
    const flagByte = ndefBytes[pos++];
    const mb = !!(flagByte & 128);
    const me = !!(flagByte & 64);
    const cf = !!(flagByte & 32);
    const sr = !!(flagByte & 16);
    const il = !!(flagByte & 8);
    const tnf = flagByte & 7;
    if (pos >= ndefBytes.length) break;
    const typeLength = ndefBytes[pos++];
    let payloadLength;
    if (sr) {
      if (pos >= ndefBytes.length) break;
      payloadLength = ndefBytes[pos++];
    } else {
      if (pos + 4 > ndefBytes.length) break;
      payloadLength = ndefBytes[pos] << 24 | ndefBytes[pos + 1] << 16 | ndefBytes[pos + 2] << 8 | ndefBytes[pos + 3];
      pos += 4;
    }
    let idLength = 0;
    if (il) {
      if (pos >= ndefBytes.length) break;
      idLength = ndefBytes[pos++];
    }
    const typeBytes = ndefBytes.slice(pos, pos + typeLength);
    pos += typeLength;
    pos += idLength;
    const payloadBytes = ndefBytes.slice(pos, pos + payloadLength);
    pos += payloadLength;
    const payloadHex = payloadBytes.slice(0, 32).map((b) => b.toString(16).padStart(2, "0")).join(" ") + (payloadBytes.length > 32 ? " \u2026" : "");
    const typeName = bytesToText(typeBytes);
    const { decoded, fields } = decodePayload(tnf, typeBytes, payloadBytes);
    const extraFields = [
      { label: "TNF", value: `0x0${tnf} \u2014 ${(_a = TNF_NAMES[tnf]) != null ? _a : "Unknown"}`, mono: true },
      { label: "Type", value: typeName || "(none)", mono: true },
      { label: "Payload Length", value: `${payloadLength} bytes` }
    ];
    records.push({
      index,
      tnf,
      tnfName: (_b = TNF_NAMES[tnf]) != null ? _b : "Unknown",
      typeName,
      payloadHex,
      payloadDecoded: decoded,
      flags: { mb, me, cf, sr, il },
      fields: [...extraFields, ...fields]
    });
    index++;
    if (me) break;
  }
  if (records.length === 0) {
    return "No valid NDEF records found. Check that the hex represents a valid NDEF message.";
  }
  return records;
}
var EXAMPLE_HEX = "D1 01 0F 55 04 6E 66 63 66 79 69 2E 63 6F 6D 2F";
function initNdefInspectorTool(el, config) {
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "tagfyi-tool");
  container.innerHTML = `
    <div class="tagfyi-scan-strip">
      <div class="tagfyi-header-text">
        <p class="tagfyi-scan-strip-title">NDEF Message Inspector</p>
        <p class="tagfyi-scan-strip-meta">Paste NDEF hex to decode records</p>
      </div>
    </div>

    <div class="tagfyi-tool-input-wrap">
      <textarea
        class="tagfyi-tool-textarea"
        id="tagfyi-ndef-input"
        rows="4"
        placeholder="Paste NDEF hex bytes here\u2026&#10;Example: D1 01 0F 55 04 6E 66 63 66 79 69 2E 63 6F 6D 2F&#10;&#10;Supports: spaces, colons, or raw hex strings"
        spellcheck="false"
        autocomplete="off"
      ></textarea>
      <div class="tagfyi-tool-row">
        <button class="tagfyi-search-btn" id="tagfyi-ndef-analyze">Decode</button>
        <button class="tagfyi-copy-btn" id="tagfyi-ndef-example">Load Example</button>
        <button class="tagfyi-copy-btn" id="tagfyi-ndef-clear">Clear</button>
      </div>
    </div>

    ${poweredByHTML(config)}
  `;
  const style = shadow.querySelector("style");
  if (style) {
    style.textContent += `
.tagfyi-tool-input-wrap {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
}
.tagfyi-tool-textarea {
  width: 100%;
  min-height: 80px;
  padding: 8px 10px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 12px;
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: border-color 0.15s;
  box-sizing: border-box;
}
.tagfyi-tool-textarea:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}
.tagfyi-tool-textarea::placeholder {
  color: var(--muted);
  font-size: 11px;
}
.tagfyi-tool-row {
  display: flex;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
}
.tagfyi-ndef-record {
  border-bottom: 1px solid var(--border);
}
.tagfyi-ndef-record-header {
  padding: 8px 16px;
  background: var(--surface);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.tagfyi-ndef-flags {
  display: flex;
  gap: 4px;
  margin-left: auto;
}
.tagfyi-ndef-flag {
  font-size: 9px;
  padding: 1px 4px;
  border-radius: 2px;
  background: var(--badge-bg);
  color: var(--badge-text);
  font-weight: 600;
  text-transform: uppercase;
}
.tagfyi-ndef-flag.active {
  background: color-mix(in srgb, var(--accent) 20%, transparent);
  color: var(--accent);
}
.tagfyi-tool-error {
  padding: 12px 16px;
  color: var(--muted);
  font-size: 12px;
  border-bottom: 1px solid var(--border);
}
    `;
  }
  const textarea = container.querySelector("#tagfyi-ndef-input");
  const analyzeBtn = container.querySelector("#tagfyi-ndef-analyze");
  const exampleBtn = container.querySelector("#tagfyi-ndef-example");
  const clearBtn = container.querySelector("#tagfyi-ndef-clear");
  function renderRecords(records) {
    container.querySelectorAll(".tagfyi-ndef-records, .tagfyi-tool-error").forEach((e) => e.remove());
    const wrap = document.createElement("div");
    wrap.className = "tagfyi-ndef-records";
    records.forEach((rec) => {
      const flagList = [
        { key: "MB", active: rec.flags.mb, title: "Message Begin" },
        { key: "ME", active: rec.flags.me, title: "Message End" },
        { key: "CF", active: rec.flags.cf, title: "Chunk Flag" },
        { key: "SR", active: rec.flags.sr, title: "Short Record" },
        { key: "IL", active: rec.flags.il, title: "ID Length present" }
      ];
      const flagsHTML = flagList.map((f) => `<span class="tagfyi-ndef-flag ${f.active ? "active" : ""}" title="${escapeHTML11(f.title)}">${escapeHTML11(f.key)}</span>`).join("");
      const fieldRows = rec.fields.map((f) => `
          <div class="tagfyi-kv-row">
            <div class="tagfyi-kv-key">${escapeHTML11(f.label)}</div>
            <div class="tagfyi-kv-value">
              ${f.mono ? `<span class="tagfyi-mono-value">${escapeHTML11(f.value)}</span>` : escapeHTML11(f.value)}
            </div>
          </div>`).join("");
      const recDiv = document.createElement("div");
      recDiv.className = "tagfyi-ndef-record";
      recDiv.innerHTML = `
        <div class="tagfyi-ndef-record-header">
          <span>Record ${rec.index + 1}</span>
          <div class="tagfyi-ndef-flags">${flagsHTML}</div>
        </div>
        <div class="tagfyi-kv-table">${fieldRows}</div>
      `;
      wrap.appendChild(recDiv);
    });
    const powered2 = container.querySelector(".tagfyi-powered");
    if (powered2) {
      container.insertBefore(wrap, powered2);
    } else {
      container.appendChild(wrap);
    }
  }
  function showError(msg) {
    container.querySelectorAll(".tagfyi-ndef-records, .tagfyi-tool-error").forEach((e) => e.remove());
    const errDiv = document.createElement("div");
    errDiv.className = "tagfyi-tool-error";
    errDiv.textContent = msg;
    const powered2 = container.querySelector(".tagfyi-powered");
    if (powered2) container.insertBefore(errDiv, powered2);
    else container.appendChild(errDiv);
  }
  function runDecode() {
    var _a, _b;
    const hex = (_b = (_a = textarea == null ? void 0 : textarea.value) == null ? void 0 : _a.trim()) != null ? _b : "";
    if (!hex) return;
    const result = parseNDEF(hex);
    if (typeof result === "string") {
      showError(result);
    } else {
      renderRecords(result);
    }
  }
  analyzeBtn == null ? void 0 : analyzeBtn.addEventListener("click", runDecode);
  exampleBtn == null ? void 0 : exampleBtn.addEventListener("click", () => {
    if (textarea) textarea.value = EXAMPLE_HEX;
    runDecode();
  });
  clearBtn == null ? void 0 : clearBtn.addEventListener("click", () => {
    if (textarea) textarea.value = "";
    container.querySelectorAll(".tagfyi-ndef-records, .tagfyi-tool-error").forEach((e) => e.remove());
  });
  textarea == null ? void 0 : textarea.addEventListener("keydown", (e) => {
    const ke = e;
    if (ke.key === "Enter" && (ke.ctrlKey || ke.metaKey)) {
      e.preventDefault();
      runDecode();
    }
  });
  const actionsDiv = document.createElement("div");
  actionsDiv.className = "tagfyi-actions";
  actionsDiv.innerHTML = `<a class="tagfyi-link" href="https://${escapeHTML11(config.domain)}/guides/" target="_blank" rel="noopener">NDEF format guides on ${escapeHTML11(config.name)} ${externalLinkIcon}</a>`;
  const powered = container.querySelector(".tagfyi-powered");
  if (powered) container.insertBefore(actionsDiv, powered);
  else container.appendChild(actionsDiv);
}

// src/_entry_nfcfyi.ts
function initWidget(el, type, config) {
  switch (type) {
    case "spec":
      initSpecWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "features":
      initFeaturesWidget(el, config);
      break;
    case "standard":
      initStandardWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "tooltip":
      initTooltipWidget(el, config);
      break;
    case "faq":
      initFaqWidget(el, config);
      break;
    case "guide":
      initGuideWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "frequency":
      initFrequencyWidget(el, config);
      break;
    case "ndef-inspector":
      initNdefInspectorTool(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"nfcfyi","name":"NFCFYI","domain":"nfcfyi.com","accent":"#06B6D4","attribute":"data-nfcfyi","apiBase":"https://nfcfyi.com/api/v1/","searchPath":"/search/","entitySlug":"chips","entityName":"NFC Chips"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"nfcfyi","name":"NFCFYI","domain":"nfcfyi.com","accent":"#06B6D4","attribute":"data-nfcfyi","apiBase":"https://nfcfyi.com/api/v1/","searchPath":"/search/","entitySlug":"chips","entityName":"NFC Chips"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"nfcfyi","name":"NFCFYI","domain":"nfcfyi.com","accent":"#06B6D4","attribute":"data-nfcfyi","apiBase":"https://nfcfyi.com/api/v1/","searchPath":"/search/","entitySlug":"chips","entityName":"NFC Chips"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"nfcfyi","name":"NFCFYI","domain":"nfcfyi.com","accent":"#06B6D4","attribute":"data-nfcfyi","apiBase":"https://nfcfyi.com/api/v1/","searchPath":"/search/","entitySlug":"chips","entityName":"NFC Chips"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.styleVariant = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"nfcfyi","name":"NFCFYI","domain":"nfcfyi.com","accent":"#06B6D4","attribute":"data-nfcfyi","apiBase":"https://nfcfyi.com/api/v1/","searchPath":"/search/","entitySlug":"chips","entityName":"NFC Chips"}'.site;
  const defs = [
    [`${site}-spec`, initSpecWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slug-a", "slug-b"]],
    [`${site}-features`, initFeaturesWidget, ["slug"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug", "letter"]],
    [`${site}-faq`, initFaqWidget, ["slug", "category"]],
    [`${site}-guide`, initGuideWidget, ["slug"]],
    [`${site}-search`, initSearchWidget, ["placeholder", "query"]],
    [`${site}-inspector`, initNdefInspectorTool, ["input", "hex"]],
    [`${site}-frequency`, initFrequencyWidget, ["slug"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
