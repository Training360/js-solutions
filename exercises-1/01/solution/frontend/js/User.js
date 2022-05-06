class User {
  static #url = 'http://localhost:3000/users';

  static async post(data) {
    try {
      const result = await fetch(User.#url, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const resultObject = await result.json()
      console.log(resultObject);
    } catch (error) {
      console.error(error.message);
    }
  }

  static async get(id) {
    try {
      const result = await fetch(`${User.#url}/${id}`);
      const resultObject = await result.json()
      console.log(resultObject);
    } catch (error) {
      console.error(error.message);
    }
  }

  static async put(data, id) {
    try {
      const result = await fetch(`${User.#url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
      const resultObject = await result.json()
      console.log(resultObject);
    } catch (error) {
      console.error(error.message);
    }
  }

  static async delete(id) {
    try {
      const result = await fetch(`${User.#url}/${id}`, {
        method: 'DELETE',
      });
      const resultObject = await result.json()
      console.log(resultObject);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default User;
