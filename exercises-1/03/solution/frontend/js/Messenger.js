class Messenger {
  #messageContainer = null
  #hideAfterMiliSec = null;

  constructor(container = "#messages", hideAfterMiliSec = 5000) {
    this.#messageContainer = document.querySelector(container);
    this.#hideAfterMiliSec = hideAfterMiliSec
  } 

  createMessageElement(type, message = "#message") {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add(
      "alert",
      "rounded-0",
      `${type === "error" ? "alert-danger" : "alert-success"}`
    );
    this.showMessage(messageDiv);
  }

  showMessage(messageDiv) {
    this.#messageContainer.insertAdjacentElement("afterbegin", messageDiv);
    this.hideMessage(messageDiv);
  }

  hideMessage(messageDiv) {
    setTimeout(() => {
      messageDiv.remove();
    }, this.#hideAfterMiliSec);
  }

  error(message) {
    this.createMessageElement("error", message);
  }

  success(message) {
    this.createMessageElement("success", message);
  }
}

export default Messenger;