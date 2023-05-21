const { v4: uuidv4 } = require('uuid');

class UserService {
  constructor() {
    this.users = [
      {
        id: "1",
        email: "admin@mail.com",
        username: "nicov90",
        firstname: "Nicolas",
        lastname: "Valdez",
        password: "1234",
      },
    ];
  }
  async createUser(data) {
    const newUser = {
      id: uuidv4(),
      ...data,
    };
    this.users = [newUser, ...this.users];

    return newUser;
  }
  async getUsers() {
    return this.users;
  }
  async getUserById(id) {
    const user = this.users.find((user) => user.id === id);
    console.log(user)
    if (user) {
      return user;
    } else {
      return "User not found."
    }
  }
  async updateUser(id, data) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      const user = this.users[userIndex];
      this.users[userIndex] = {
        ...user,
        ...data,
      };
    } else {
      return "User not found."
    }

    return this.users[userIndex];
  }
  async deleteUser(id) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users.splice(userIndex, 1);

    return this.users;
  }
}

module.exports = UserService;
