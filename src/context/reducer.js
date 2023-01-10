export const initialState = {
    user: {},
    logged: false,
    events: [],
    event: {},
    step: 0,
    groups: [],
    group: {},
    sector: {},
    nr_tickets: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return { ...state, user: action.payload };
        case "SET_LOGGED":
            return { ...state, logged: action.payload };
        case "TEST":
            return { ...state, test: action.payload };
        case "SET_EVENTS":
            return { ...state, events: [...action.payload] };
        case "UPDATE_EVENT":
            return { ...state, event: action.payload };
        case "UPDATE_STEP":
            return { ...state, step: action.payload };
        case "SET_GROUPS":
            return { ...state, groups: [...action.payload] };
        case "UPDATE_GROUP":
            return { ...state, group: action.payload };
        case "UPDATE_SECTOR":
            return { ...state, sector: action.payload };
        case "UPDATE_NR_TICKETS":
            return { ...state, nr_tickets: action.payload };
        default:
            return { ...state };
    }
};

export default reducer;