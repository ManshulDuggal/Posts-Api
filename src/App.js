import styled from "styled-components";
import SideBar from "./components/sidebar";
import MainContainer from "./components/content";
import Card from "./components/card";
import GlobalStyles from "./components/GlobalStyles";

function App() {
    // const [Posts, setPosts] = useState(false);

    return (
        <>
            <GlobalStyles />
            <Container>
                <SideBar />
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
