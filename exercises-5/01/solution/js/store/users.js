const state = {
  users: [],
};

const actions = {
  setUsers(responseText) {
    state.users = [
      ...state.users,
      ...JSON.parse(responseText).users,
    ];
  },
  logUsers() {
    console.log(state.users);
  },
};

export {
  state,
  actions,
};
