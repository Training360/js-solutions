const customShortDate = (date) =>
  date.toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

const customLongDate = (date) =>
  date.toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

const customDateFormats = (date) => ({
  short: customShortDate(date),
  long: customLongDate(date),
});

export default customDateFormats;
