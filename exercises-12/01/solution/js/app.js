const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const {
  lastName = 'unknown',
  firstName = 'unknown',
  job = 'unknown',
} = user;

export {
  firstName,
  lastName,
  job,
};
