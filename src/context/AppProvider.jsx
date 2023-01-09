import React, { useContext, createContext, useEffect } from "react";
import { initialState } from "./reducer";
import useAppReducer from "./useAppReducer";
import login from "../api/authetication";
import { message } from "antd";
import { useNavigate } from "react-router";
import eventsData from "../api/eventsData";
import groupsData from "../api/groupsData";
import sectorLoading from "../api/sectorLoading";

const AppContext = createContext(initialState);

export function useAppContext() {
    return useContext(AppContext);
}

export default function AppProvider({ children }) {

    const navigate = useNavigate();
    const {
        user,
        logged,
        events,
        step,
        event,
        groups,
        group,
        sector,
        nr_tickets,
        dispatch } = useAppReducer();

    useEffect(() => {
        eventsData().then(
            (value) => {
                dispatch({ type: 'SET_EVENTS', payload: value });
            }
        )
    }, []);

    useEffect(() => {
        groupsData().then(
            (value) => {
                dispatch({ type: 'SET_GROUPS', payload: value });
            }
        )
    }, []);

    const finishLogin = (values) => {
        login(values)
            .then((user) => {
                message.success("Conectarea a reușit!");
                dispatch({ type: 'UPDATE_USER', payload: user });
                dispatch({ type: 'SET_LOGGED' });
                navigate("/home");
            })
            .catch((e) => message.error(e.message));
    }

    const guest = () => navigate("/home");

    const manuOptions = (key) => {
        switch (key) {
            case '1':
                {
                    navigate("/login");
                };
                break;
            case '2':
                {
                    navigate("/home");
                };
                break;
        }
    }

    const selectEvent = (event) => {
        dispatch({ type: 'UPDATE_EVENT', payload: event });
        dispatch({ type: 'UPDATE_STEP', payload: 0 });
        navigate("/groups");
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {

            selectGroup(selectedRows[0]);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };

    const selectGroup = (selectedRows) => {

        dispatch({ type: 'UPDATE_GROUP', payload: selectedRows });
        dispatch({ type: 'UPDATE_STEP', payload: 1 });
        navigate("/tickets");
    }

    useEffect(() => {
        sectorLoading(event.key, group.sector_nr)
            .then((sector) => {
                dispatch({ type: 'UPDATE_SECTOR', payload: sector });
            })
            .catch((e) => message.error(e.message));
    }, [group]);

    const changeStep = (value) => {
        dispatch({ type: 'UPDATE_STEP', payload: value });
        switch (value) {
            case 0:
                {
                    console.log(value);
                    navigate("/groups");
                };
                break;
            case 1:
                {
                    navigate("/tickets");
                };
                break;
            case 2:
                {
                    navigate("/personalData");
                };
                break;
        };
    }

    const addTicket=()=>{ 
        dispatch({ type: 'UPDATE_NR_TICKETS', payload: nr_tickets+1 });
    }

    const selectSeats=()=>{
        dispatch({ type: 'UPDATE_STEP', payload: 2 });
        navigate("/personalData");
    }


    return <AppContext.Provider value={{
        user,
        logged,
        events,
        event,
        step,
        groups,
        group,
        sector,
        nr_tickets,
        finishLogin,
        guest,
        manuOptions,
        selectEvent,
        changeStep,
        rowSelection,
        addTicket,
        selectSeats,
    }}>{children}</AppContext.Provider>
}