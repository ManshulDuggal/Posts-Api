import react, { useEffect } from "react";
import Axios from "axios";
import { motion } from "framer-motion";
// import styled from "styled-components";
import { Base } from "../api/api";
import { useState } from "react/cjs/react.development";
import Card from "./cardGrids";
import styled from "styled-components";

//useeffect
//send props back to card
function MainContainerGrids() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get(Base).then((res) => {
            setPosts(res.data);
            console.log(res);
        });
    }, []);

    const removeCard = (id) => {
        setPosts(() => [...posts.filter((post) => id !== post.id)]);

        console.log(posts);
    };

    return (
        <Content>
            <div className="gridContainer">
                {posts.slice(0, 6).map((data) => (
                    <Card
                        removeCard={removeCard}
                        title={data.title}
                        body={data.body}
                        key={data.id}
                        id={data.id}
                    />
                ))}
            </div>
        </Content>
    );
}

const Content = styled.div`
    .gridContainer {
        display: grid;
        grid-gap: 0rem;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        background: hsl(207.69, 39.39%, 93.53%);
    }
`;
export default MainContainerGrids;
