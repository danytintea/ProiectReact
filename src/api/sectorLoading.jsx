const API_URL = 'http://localhost:3002';
import axios from "axios";

const sectorLoading = async (event_id, group_id) => {
    const response = await axios.get(`${API_URL}/sectors`);

    const sector = response.data.find((sector) => sector.event_id == event_id && sector.group_id == group_id);

    if (sector) {
        return sector;
    }
  
}

const loadSectorsNewEvent = async (group_id) => {
    const response = await axios.get(`${API_URL}/sectorsNewEvent`);

    const sector = response.data.find((sector) =>  sector.group_id == group_id);

    if (sector) {
        return sector;
    }
  
}

const addSector = async (sector) => {
    const newSector = await axios.post(`${API_URL}/sectors`, sector);
    if (newSector) {
        return newSector;
    }
    throw new Error("Eroare la adaugare!");
};

const detleteById= async(id)=>{
    const deleted =await axios.delete(`${API_URL}/sectors/${id}`);
    return deleted;
}

const deleteSector= async(event)=>{
    const response = await axios.get(`${API_URL}/sectors`);

    const sector=response.data.filter(sector =>  sector.event_id==event).map((filtredSector)=>{
        detleteById(filtredSector.id);
    })
  
}

export {loadSectorsNewEvent, addSector, deleteSector};
export default sectorLoading;