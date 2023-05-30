import { Button, Typography } from "antd";
import React, { useState } from "react";
import { useAppContext } from "../../context";
import "./style.css"

export default function Seats({ sector }) {


    const { nr_tickets, addTicket, deleteTicket, group, selectSeats, chooseSeat, event } = useAppContext();
    const price = nr_tickets * 10;
    var sectorState = sector;
    

    return (
        <div className="bgSeat">

            <Typography.Title level={1} color="white" className="headerText">Selecteaza locurile:</Typography.Title>
            <Typography.Title level={1} className="headerText">{group.name} (sector {group.sector_nr})</Typography.Title>
            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>N/A</small>
                </li>
                <li>
                    <div className="seat selected"></div>
                    <small>selectat</small>
                </li>
                <li>
                    <div className="seat occupied"></div>
                    <small>ocupat</small>
                </li>
            </ul>

            {
                sectorState?.seats?.map((seat) =>
                    <div key={seat.row} className="row">
                        <label>{seat.row + 1}</label>
                        {seat.seat_nr.map((value) =>
                            <>
                                <div className={value.stats_seat} onClick={() => {
                                    if (value.stats_seat == "seat") {
                                        value.stats_seat = "seat selected";
                                        addTicket();
                                    }
                                    else
                                        if (value.stats_seat == "seat selected") {
                                            value.stats_seat = "seat";
                                            deleteTicket();
                                        }
                                    chooseSeat(sectorState);
                                }}></div>
                            </>
                        )}
                    </div>
                )}

            <Typography.Title level={2} className="headerText">Ai ales {nr_tickets} bilete ({price} lei)</Typography.Title>
            <Button type="primary" onClick={()=>{selectSeats(sectorState)}} size="large" style={{ background: "red" }}>
                Rezerva
            </Button>
        </div>
    )
}