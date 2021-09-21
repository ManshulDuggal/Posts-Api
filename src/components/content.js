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
            console.log(posts);
            console.log(Base);
        });
    });

    return (
        <div>
            {posts.map((data) => {
                <Card title={data.title} />;
            })}
            <h2>IDont know whats happening</h2>
            <h1>for getting data</h1>
        </div>
    );
}
export default MainContainer;
