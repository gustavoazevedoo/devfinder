class UserService {
  async listUser(user) {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    return data;
  }
}

export default new UserService();
