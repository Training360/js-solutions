class Api {
  #url = 'http://localhost:3000/';

  constructor(path) {
    this.#url = this.#url + path;
  }

  async post(data) {  
    const result = await fetch(this.#url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return result.json()
  }

  async get(id) {
    const result = await fetch(`${this.#url}/${id}`);
    return result.json()
  }

  async put(data, id) {
    const result = await fetch(`${this.#url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return result.json()
  }

  async delete(id) {
    const result = await fetch(`${this.#url}/${id}`, {
      method: 'DELETE',
    });
    return result.json()
  }
}

export default Api;
