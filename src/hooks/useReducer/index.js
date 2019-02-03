import React, { useReducer } from "react";

// function reducer(state, action) {
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state;
//     }
// }

function reducer(state, action) {
    const values = {
        INCREMENT: () => state + 1,
        DECREMENT: () => state - 1,
        DEFAULT: () => state
    };

    return values[action.type] ? values[action.type]() : values["DEFAULT"]();
}

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
