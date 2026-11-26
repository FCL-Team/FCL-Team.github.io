/**
 * Formatting helpers shared by the marketing pages.
 */

export function formatCompact(value) {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
  }
  if (value >= 1000) {
    return Math.round(value / 1000) + 'k+';
  }
  return String(value);
}

export function formatBytes(bytes) {
  if (!bytes) {
    return '';
  }
  const mb = bytes / (1024 * 1024);
  if (mb >= 1024) {
    return (mb / 1024).toFixed(2) + ' GB';
  }
  return Math.round(mb) + ' MB';
}

export function formatDate(iso, locale) {
  try {
    return new Intl.DateTimeFormat(locale === 'zh-Hans' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(iso));
  } catch (e) {
    return iso.slice(0, 10);
  }
}
