const API_URL = 'http://localhost:3001';

const groupsData = async () => {
    const response = await fetch(`${API_URL}/groups`);

    const groups = await response.json();

    
    if(groups)
    return groups;

    throw new Error("Eroare la incarcarea grupurilor!");
}

export default groupsData;