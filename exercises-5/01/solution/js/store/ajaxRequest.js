const state = {
  delay: 5000,
  maxRetry: 2,
  retryCounter: 0,
};

const actions = {
  initRequest(maxRetry, delay) {
    actions.setMaxRetry(maxRetry);
    actions.setDelay(delay);
    actions.initRetryCounter();
  },
  setMaxRetry(maxRetry) {
    state.maxRetry = maxRetry;
  },
  setDelay(delay) {
    state.delay = delay;
  },
  increaseRetryCounter() {
    state.retryCounter += 1;
  },
  initRetryCounter() {
    state.retryCounter = 0;
  },
};

export {
  state,
  actions,
};
