import { useReducer } from "react";
import reducer, { initialState } from "./reducer";

export default function useAppReducer() {
    const [state, dispatch] = useReducer(
      reducer,
        {...initialState},
      );

    return { ...state, dispatch };    
}