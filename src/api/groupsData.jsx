const API_URL = 'http://localhost:3001';
import axios from "axios";

const groupsData = async () => {
    const response = await axios.get(`${API_URL}/groups`);

    const groups = response.data;

    
    if(groups)
    return groups;

    throw new Error("Eroare la incarcarea grupurilor!");
}

const getCurrentGroup = async (name) => {
    const response = await axios.get(`${API_URL}/groups`);

    const group = response.data.find((group) => group.name == name);

    if (group) {
        return group;
    }

    throw new Error("Eroare la incarcare!");
}

export {getCurrentGroup};

export default groupsData;