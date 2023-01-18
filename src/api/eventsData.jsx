const API_URL = 'http://localhost:3001';
import axios from "axios";

const eventsData = async () => {
    const response = await axios.get(`${API_URL}/events`);

    const events = response.data;


    if (events)
        return events;

    throw new Error("Nu sunt evenimente disponibile!");
}

const getCurrentEvent = async (id) => {
    const response = await axios.get(`${API_URL}/events`);

    const events = response.data;

    const event = events.find((event) => event.id == id);

    if (event) {
        return event;
    }

    throw new Error("Eroare la incarcare!");
}

const createEvent = async (event) => {
    console.log(event);
    const newEvent = await axios.post(`${API_URL}/events`, event);
    if (newEvent) {
        return newEvent;
    }
    throw new Error("Eroare la adaugare!");
};

const deleteEvent = async (id) => {
    const deleted = await axios.delete(`${API_URL}/events/${id}`);
    return deleted;
};

const updateEvent = async (event) => {
    const modifiedEvent = await axios.put(`${API_URL}/events/${event.id}`, event);
    return modifiedEvent.data;
};


export {
    createEvent,
    deleteEvent,
    updateEvent,
    getCurrentEvent,

};
export default eventsData;