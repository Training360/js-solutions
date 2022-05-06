import Api from './Api.js';
import Messenger from './Messenger.js';
import User from './User.js';

const usersMessenger = new Messenger();
const usersApi = new Api('users');
const user = new User(usersApi, usersMessenger);

user.read(1);
