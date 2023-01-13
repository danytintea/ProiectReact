const API_URL = 'http://localhost:3001';
import axios from "axios";

const login = async ({ username, password }) => {
    const response = await axios.get(`${API_URL}/users`);

    const user = response.data.find((user) => user.password == password && user.username == username);

    if (user) {
        return user;
    }

    throw new Error("Date incorecte!");
}

const getCurrentUser = async (username) => {
    const response = await axios.get(`${API_URL}/users`);

    const user = response.data.find((user) => user.username == username);

    if (user) {
        return user;
    }

    throw new Error("Eroare la incarcare!");
}

export default login;
export {getCurrentUser};

