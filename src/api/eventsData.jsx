const API_URL = 'http://localhost:3001';
import axios from "axios";

const eventsData = async () => {
    const response = await axios.get(`${API_URL}/events`);

    const events = response.data;

    
    if(events)
    return events;

    throw new Error("Nu sunt evenimente disponibile!");
}

const getCurrentEvent = async (key) => {
    const response = await axios.get(`${API_URL}/events`);

    const events = response.data;

    const event = events.find((event) => event.key == key);

    if (event) {
        return event;
    }

    throw new Error("Eroare la incarcare!");
}

export {getCurrentEvent};
export default eventsData;