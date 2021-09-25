import styled from "styled-components";
import SideBar from "./components/sidebar";
import MainContainer from "./components/content";
import Card from "./components/card";
import GlobalStyles from "./components/GlobalStyles";
import { useState } from "react";
function App() {
    // states
    //false = row format else its grids
    const [layout, setLayout] = useState(false);
    const ToggleViewRows = () => {
        setLayout(false);
        console.log(layout);
    };
    const ToggleViewGrids = () => {
        setLayout();
        console.log(true);
    };
    return (
        <>
            <GlobalStyles />
            <Container>
                <SideBar
                    ToggleViewRows={ToggleViewRows}
                    ToggleViewGrids={ToggleViewGrids}
                />
                <MainContainer />
            </Container>
        </>
    );
}

const Container = styled.div`
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    background-color: hsl(205, 35.29%, 93.33%);
`;

export default App;
