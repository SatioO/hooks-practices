import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};
export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <h1>Use Reducer Example</h1>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        </>
    );
}
