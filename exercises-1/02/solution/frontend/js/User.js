class User {

  #api = null;

  constructor(api) {
    this.#api = api;
  }

  success(text, user) {
    const message = user ? `${text}: ${user.firstName} ${user.lastName}` : text;
    console.log(message)  
  }

  async create(user) {
   try {
      const result = await this.#api.post(user)
      this.success('created', result);
   } catch (error) {
     console.error(error.message)
   }
  }

  async read(id) {
    try {
      const result = await this.#api.get(id)
      this.success('read', result);
    } catch (error) {
      console.error(error.message)
    }
  }

  async update(user, id) {
    try {
      const result = await this.#api.put(user, id)
      this.success(`updated`, result);
    } catch (error) {
      console.error(error.message)
    }
  }

  async delete(id) {
    try {
      await this.#api.delete(id)
      this.success('deleted', result);
    } catch (error) {
      console.error(error.message)
    }
  }
}

export default User;
