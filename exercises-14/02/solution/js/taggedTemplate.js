const getText = (text) => (text && text !== ' '
  ? `<em>${text}</em>`
  : '');

const getValue = (value) => (value && value !== ' '
  ? `<strong>${value}</strong>`
  : '');

const taggedTemplate = (texts, ...values) => texts.map(
  (text, index) => getText(text) + getValue(values[index]),
).join('');

export default taggedTemplate;
