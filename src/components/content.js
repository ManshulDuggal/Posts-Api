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
            {posts.map((data) => {
                <h1>for eact {data.title}</h1>;
            })}
            <h2>IDont know whats happening</h2>
            <h1>for getting data</h1>
        </div>
    );
}
export default MainContainer;
