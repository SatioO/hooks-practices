import React from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "./serviceWorker";
import { UseState, UseEffect, UseReducer } from "./hooks";

function App() {
    return (
        <>
            {/* <UseReducer /> */}
            {/* <UseState /> */}
            {/* <UseEffect /> */}
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

function register() {
    // if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register(`${process.env.PUBLIC_URL}/service-worker-custom.js`)
            .then(function() {
                console.log("Service worker registered! \u{1F60E}");
            })
            .catch(function(err) {
                console.log(err);
            });

        setTimeout(() => {
            const img = new Image();
            img.src = "/favicon.ico";
            document.body.append(img);
        }, 2000);
    } else {
        console.log(
            "You're running application in development mode or Your browser does not support Service worker."
        );
    }
}

register();
