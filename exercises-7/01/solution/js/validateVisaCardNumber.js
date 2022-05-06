const validateVisaCardNumber = (visaCardNumber) => {
  const visaPattern = /^4(\d{12}|\d{15})$/;
  return visaPattern.test(visaCardNumber);
};

export default validateVisaCardNumber;
