import react, { useEffect } from "react";
import Axios from "axios";
import { motion } from "framer-motion";
// import styled from "styled-components";
import { Base } from "../api/api";
import { useState } from "react/cjs/react.development";
import Card from "./card";
import styled from "styled-components";

//useeffect
//send props back to card
function MainContainer() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get(Base).then((res) => {
            setPosts(res.data);
            console.log(res);
        });
    }, []);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    const removeCard = (id) => {
        setPosts(() => [...posts.filter((post) => id !== post.id)]);

        console.log(posts);
    };
    return (
        <Content>
            {posts.slice(0, 5).map((data) => (
                <Card
                    title={data.title}
                    body={data.body}
                    key={data.id}
                    id={data.id}
                    removeCard={removeCard}
                />
            ))}
        </Content>
    );
}

const Content = styled.div`
    background-color: hsl(205, 35.29%, 93.33%);
`;
export default MainContainer;
