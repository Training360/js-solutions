const request = async (method, url) => {
  try {
    await fetch(url, { method });
    console.log('Request success');
  } catch (error) {
    console.error('Request error');
  }
};

export default request;
