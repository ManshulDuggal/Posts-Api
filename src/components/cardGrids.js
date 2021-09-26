import { motion } from "framer-motion";
import { Load } from "../components/anim";
import React from "react";
import styled from "styled-components";
import Profile from "../images/profile.jpg";
import Cross from "../images/cross.png";
const Card = ({ title, body, id, removeCard }) => {
    return (
        <>
            <Container>
                <Wrapper variants={Load} initial="hidden" animate="visible">
                    <div className="remove">
                        <img
                            src={Cross}
                            alt="remove"
                            className="delete-icon-grid"
                            onClick={() => removeCard(id)}
                        />
                    </div>

                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                    <div className="main">
                        <p>{body}</p>
                    </div>

                    <img src={Profile} alt="ocean" className="profile" />
                </Wrapper>
            </Container>
        </>
    );
};

const Wrapper = styled(motion.div)`
    margin: 2rem auto;
    padding: 0.5rem;
    border-radius: 0.4rem;
    background: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: black 1px 1px 30px;
    width: 80%;

    .profile {
        padding: 0.5rem;
        width: 100%;
        height: 10rem;
        object-fit: cover;
        border-radius: 1rem;
        img {
        }
    }

    .title {
        width: 100%;
        height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;

        h2 {
            font-size: 1.5rem;
        }
    }

    .main {
        p {
            width: 100%;
            height: 90px;
            margin: 2rem 0rem;
            font-size: 1rem;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .remove {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        color: red;
        .delete-icon-grid {
            width: 10%;

            color: red;
            margin: 0rem rem;
        }
    }
`;

const Container = styled(motion.div)`
    cursor: pointer;
`;

export default Card;
