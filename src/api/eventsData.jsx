const API_URL = 'http://localhost:3001';

const eventsData = async () => {
    const response = await fetch(`${API_URL}/events`);

    const events = await response.json();

    
    if(events)
    return events;

    throw new Error("Nu sunt evenimente disponibile!");
}

const getCurrentEvent = async (key) => {
    const response = await fetch(`${API_URL}/events`);

    const events = await response.json();

    const event = events.find((event) => event.key == key);

    if (event) {
        return event;
    }

    throw new Error("Eroare la incarcare!");
}

export {getCurrentEvent};
export default eventsData;