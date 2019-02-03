import React, { useState, memo } from "react";
// import { unstable_now as now } from "scheduler";
// console.log(now);

const PostList = ({ data = [] }) =>
    data.map(item => <PostItem key={item.id} {...item} />);

const PostItem = memo(({ title }) => <h1>{title}</h1>);

export default function UseEffect() {
    // const [count, setCount] = useState(1);
    const [posts, setPosts] = useState([
        { id: 1, title: "First Post" },
        { id: 2, title: "Second Post" },
        { id: 3, title: "Third Post" },
        { id: 4, title: "Fourth Title" }
    ]);

    // /** With [] it acts like a componentDidMount Method */
    // useEffect(() => {
    //     console.log(`Updating with ${count}`);
    // }, []);

    // /** Listen to changes in count variable, more like a componentDidupdate */
    // useEffect(() => {
    //     console.log(`Updating with ${count}`);
    // }, [count]);

    function onItemAdd() {
        // trace("Adding Item", performance.now(), () => {
        const updated = [
            ...posts,
            {
                id: posts.length + 1,
                title: `Post Title ${posts.length + 1}`
            }
        ];

        setPosts(updated);
        // });
    }

    return (
        <div>
            {/* <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button> */}
            <input type="text" />
            <button onClick={onItemAdd}>Add Item</button>
            <PostList data={posts} />
        </div>
    );
}
