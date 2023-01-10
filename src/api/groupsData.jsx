const API_URL = 'http://localhost:3001';

const groupsData = async () => {
    const response = await fetch(`${API_URL}/groups`);

    const groups = await response.json();

    
    if(groups)
    return groups;

    throw new Error("Eroare la incarcarea grupurilor!");
}

const getCurrentGroup = async (name) => {
    const response = await fetch(`${API_URL}/groups`);

    const groups = await response.json();

    const group = groups.find((group) => group.name == name);

    if (group) {
        return group;
    }

    throw new Error("Eroare la incarcare!");
}

export {getCurrentGroup};

export default groupsData;