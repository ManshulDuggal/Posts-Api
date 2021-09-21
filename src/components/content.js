import react, { useEffect } from "react";
import Axios from "axios";

// import styled from "styled-components";
import { Base } from "../api/api";
import { useState } from "react/cjs/react.development";
import Card from "./card";

//useeffect
//send props back to card
function MainContainer() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get(Base).then((res) => {
            setPosts(res.data);
        });
    }, []);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <div>
            {posts.map((data) => (
                <Card title={data.title} />
            ))}
            <h1>main content</h1>
        </div>
    );
}
export default MainContainer;
