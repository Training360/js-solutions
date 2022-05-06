const cookieHandler = {
  getAll() {
    return Object.fromEntries(
      document.cookie.split('; ').map((cookie) => cookie.split('=')),
    );
  },

  flush() {
    document.cookie.split('; ').forEach((cookie) => {
      const [key] = cookie.split('=');
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    });
  },

  toSessionStorage() {
    document.cookie.split('; ').forEach((cookie) => {
      const [key, value] = cookie.split('=');
      sessionStorage.setItem(key, value);
    });
  },
};

export default cookieHandler;
