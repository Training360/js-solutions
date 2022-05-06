const roles = {
  visa: /^4(\d{12}|\d{15})$/,
  ip: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
  mac: /^[0-9a-fA-F]{1,2}([.:-])(?:[0-9a-fA-F]{1,2}\1){4}[0-9a-fA-F]{1,2}$/,
};

const validate = (value, type) => roles[type].test(value);

export default validate;
