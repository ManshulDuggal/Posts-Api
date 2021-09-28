import page1 from "../images/1.png";
import page2 from "../images/2.png";
import page3 from "../images/3.png";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { pageHover } from "./anim";
import styled from "styled-components";
const Pages = () => {
    let history = useHistory();
    const Redirect = (id) => {
        history.push("/" + id);
        console.log(history);
    };

    return (
        <Container>
            <div className="pages">
                <div>
                    <motion.img
                        src={page1}
                        alt="number"
                        variants={pageHover}
                        whileHover="whileHover"
                        onClick={() => Redirect()}
                    />
                    <motion.img
                        src={page2}
                        alt="number"
                        variants={pageHover}
                        whileHover="whileHover"
                        onClick={() => Redirect(2)}
                    />
                    <motion.img
                        src={page3}
                        alt="number"
                        variants={pageHover}
                        whileHover="whileHover"
                        onClick={() => Redirect(3)}
                    />
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    top: 90%;
    left: 50%;

    div {
        width: 40%;
    }
    .pages {
        display: flex;
        text-align: center;

        img {
            cursor: pointer;
            padding: 0.2rem;
            width: 20%;
        }
    }
`;

export default Pages;
