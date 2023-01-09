const API_URL = 'http://localhost:3001';

const login = async ({ username, password }) => {
    const response = await fetch(`${API_URL}/users`);

    const users = await response.json();

    const user = users.find((user) => user.password == password && user.username == username);

    if (user) {
        return user;
    }

    throw new Error("Date incorecte!");
}

export default login;