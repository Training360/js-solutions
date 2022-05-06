import { state, actions } from './store/ajaxRequest.js';

function ajaxRequest({
  url,
  successCallback,
  method = 'GET',
  delay = 5000,
  maxRetry = 2,
} = {}) {
  actions.initRequest(maxRetry, delay);

  function handleError(message) {
    console.error(message);
  }

  function handleOnLoad(xhr) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      successCallback(xhr.responseText);
    } else if (state.retryCounter < state.maxRetry) {
      actions.increaseRetryCounter();
      setTimeout(() => request(), state.delay);
    } else {
      handleError(`Resource not avaiable: ${url}`);
    }
  }

  function request() {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => handleOnLoad(xhr);
    xhr.onerror = handleError;
    xhr.open(method, url);
    xhr.send();
  }

  return request;
}

export default ajaxRequest;
