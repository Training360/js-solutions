import Api from './Api.js';
import User from './User.js';

const usersApi = new Api('users');
const user = new User(usersApi);

user.read();
