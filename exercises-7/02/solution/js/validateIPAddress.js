const validateIPAddress = (ipAddress) => {
  const IPPattern = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
  return IPPattern.test(ipAddress);
};

export default validateIPAddress;
