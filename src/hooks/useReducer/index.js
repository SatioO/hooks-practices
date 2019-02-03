import React, {
    useReducer,
    useEffect,
    memo,
    useCallback,
    useMemo
} from "react";

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

// function reducer(state, action) {
//     const values = {
//         INCREMENT: () => state + 1,
//         DECREMENT: () => state - 1,
//         DEFAULT: () => state
//     };

//     return values[action.type] ? values[action.type]() : values["DEFAULT"]();
// }

// export default function UseReducer() {
//     const [state, dispatch] = useReducer(reducer, 0);
//     return (
//         <>
//             <h1>Use Reducer Example</h1>
//             <h1>{state}</h1>
//             <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//             <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//         </>
//     );
// }

// const APPEND = Symbol("Append array element");

function reducer(state, action) {
    return {
        APPEND: () => state.concat(action.value),
        DEFAULT: () => state
    }[action.type]();
}

function alertItem(item) {
    console.log(item);
}

const ListItem = memo(function ListItem({ item }) {
    console.log(item);
    return <h1 onClick={useCallback(() => alertItem(item), [item])}>{item}</h1>;
});

// function ListItem({ item }) {
//     console.log(item);
//     return <h1>{item}</h1>;
// }

function onListItemRender(item) {
    return <ListItem key={item} item={item} />;
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, [1, 2, 3, 4, 5]);

    useEffect(() => {
        console.log(state);
    }, [state]);

    function onAppend() {
        dispatch({ type: "APPEND", value: state.length + 1 });
    }

    return (
        <>
            <h1>Use Reducer Example</h1>
            <hr />
            <div>
                {state.map(onListItemRender)}
                <button onClick={useCallback(() => onAppend())}>Append</button>
            </div>
        </>
    );
}
