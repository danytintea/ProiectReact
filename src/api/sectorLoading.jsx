const API_URL = 'http://localhost:3001';
import axios from "axios";

const sectorLoading = async (event_id, group_id) => {
    const response = await axios.get(`${API_URL}/sectors`);

    const sector = response.data.find((sector) => sector.event_id == event_id && sector.group_id == group_id);

    if (sector) {
        return sector;
    }

    
}

export default sectorLoading;