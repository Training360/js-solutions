const setCookie = (value) => {
  const expires = new Date(Date.now() + (15 * 60 * 1000));
  document.cookie = `token=${value}; expires=${expires.toUTCString()}`;
};

export default setCookie;
