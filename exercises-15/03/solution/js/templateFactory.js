const templateFactory = (arr) => `<ul>${arr.map((item) => `<li>${item}</li>`).join('')}</ul>`;

export default templateFactory;
