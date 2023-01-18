import { useAppContext } from "../../context";
import React from "react";

export default function EmptySector(event_nr) {

    const { groups } = useAppContext

    const emptySector = [{
        event_id: null,
        group_id: null,
        seats: [
            {
                row: null,
                stats_seat: []
            }]
    }]

    for (let k = 0; k < groups.length(); i++) {
        emptySector.event_id = event_nr;
        emptySector.group_id = groups[k].sector_nr;
        for (let i = 0; i < 20; i++) {
            emptySector.seats[i].row = i;
            for (let j = 0; j < 20; j++) {
                emptySector.seats[i].stats_seat[j] = "seat";
            }
        }
    }

    return emptySector;
}