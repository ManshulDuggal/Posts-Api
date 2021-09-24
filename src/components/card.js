import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Profile from "../images/profile.jpg";
import Cross from "../images/cross.png";
const Card = ({ title, body, id }) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <div className="profile">
                        <img src={Profile} alt="not found" />
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                </Wrapper>
                <div className="delete">
                    {/* onclick remove the card */}
                    <img src={Cross} alt="remove" className="delete-icon" />
                </div>
            </Container>
        </>
    );
};

const Wrapper = styled.div`
    margin: 2rem 0rem;
    padding: 1rem;
    border-radius: 1rem;
    background: white;
    display: flex;
    color: black;
    box-shadow: black 1px 1px 30px;
    width: 80%;

    .profile {
        width: 5rem;
        margin: 0rem 1rem;
    }

    h2 {
        font-size: 1rem;
    }
    p {
        font-size: 0.7rem;
    }
`;

const Container = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Card;
