const API_URL = 'http://localhost:3001';

const sectorLoading = async (event_id, group_id) => {
    const response = await fetch(`${API_URL}/sectors`);

    const seactors = await response.json();

    const sector = seactors.find((sector) => sector.event_id == event_id && sector.group_id == group_id);

    if (sector) {
        return sector;
    }

    throw new Error(`Nu gaseste ${event_id}, ${group_id}`);
}

export default sectorLoading;