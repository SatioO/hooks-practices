import React, { useState } from "react";

export default function UseState() {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}
