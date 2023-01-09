const API_URL = 'http://localhost:3001';

const eventsData = async () => {
    const response = await fetch(`${API_URL}/events`);

    const events = await response.json();

    
    if(events)
    return events;

    throw new Error("Nu sunt evenimente disponibile!");
}

export default eventsData;