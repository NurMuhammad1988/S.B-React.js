import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
    data: [],
    term: "",
    filter: "all",
};

export const Context = createContext();
const reducer = (state = initialValue, action) => {
    const { type, payLoad } = action;

    switch (type) {
        case "GET_DATA":
            return { ...state, data: payLoad };
        //
        case "ON_DELETE":
            const deleteArr = state.data.filter((c) => c.id !== payLoad);
            return { ...state, data: deleteArr };

        case "ON_TOGGLE_PROP":
            const { id, prop } = payLoad;
            const toggleArr = state.data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            });
            return { ...state, data: toggleArr };

        case "ADD_FORM":
            const { name, viewers } = payLoad;

            const addFormArr = {
                name,
                viewers,
                id: uuidv4(),
                favourite: false,
                like: false,
            };
            return { ...state, data: [...state.data, addFormArr] };

        case "ON_TERM":
            return { ...state, term: payLoad };

        case "ON_FILTER":
            return { ...state, filter: payLoad };

        default:
            return { state };
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
