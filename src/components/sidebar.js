import styled, { createGlobalStyle } from "styled-components";
import Profile from "../images/profile.jpg";

function SideBar() {
    return (
        <>
            <Container>
                <Card>
                    <div className="profile">
                        <img src={Profile} alt="not found" />
                    </div>
                    <div className="heading">
                        <h1>Hi reader,</h1>
                        <p>Heres your news</p>
                    </div>
                </Card>

                <Toggle>
                    <h1>View Toggle</h1>
                    <div className="options">
                        <button className="active-button"> Row</button>
                        <button> column</button>
                    </div>
                </Toggle>
                <Feedback>
                    <h1>Have A Feedback?</h1>
                    <div className="Frm-btn">
                        <button> We're Listening!</button>
                    </div>
                </Feedback>
            </Container>
        </>
    );
}

const Container = styled.div`
    box-shadow: 1px 0px 20px 0.1px black inset;

    border-radius: 0rem 2rem 2rem 0rem;
    width: 30%;
    padding: 3rem;
    background: hsl(205, 35.29%, 93.33%);
`;

const Card = styled.div`
    //content body
    padding: 0.7rem;
    display: flex;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: black 0.1rem 0.1rem 0.4rem;
    .heading {
        padding: 0.5rem;
        h1 {
            font-size: 1rem;
        }
    }
`;

const Toggle = styled.div`
    padding: 2rem;
    box-shadow: black 0.1rem 0.1rem 0.4rem;
    background-color: white;
    margin: 2rem 0rem;
    border-radius: 1rem 1rem 1rem 1rem;
    text-align: center;

    //toggle buttons
    .options {
        margin: 4rem 0rem;

        button {
            box-shadow: black 1px 1px 2px 0px inset;

            padding: 1.4rem;
        }
    }
`;

const Feedback = styled(Toggle)`
    button {
        padding: 1rem;
        border-radius: 1rem;
        margin: 1rem 0rem;
        width: 100%;
        .Frm-btn {
        }
    }
`;

export default SideBar;
