import styled from "styled-components";
import SideBar from "./components/sidebar";
import MainContainer from "./components/content";
import MainContainerGrids from "./components/contentGrids";
import GlobalStyles from "./components/GlobalStyles";
import Pages from "./components/pages";
import MainContainerTwo from "./components/pages/pageTwo";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams,
} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <GlobalStyles />
                <Container>
                    <SideBar />

                    <Route path="/Gridview" exact>
                        <MainContainerGrids />
                        <Pages />
                    </Route>
                    <Route path="/" exact>
                        <MainContainer />
                        <Pages />
                    </Route>
                    <Route path="/2" exact>
                        <MainContainerTwo />
                        <Pages />
                    </Route>
                </Container>
            </Router>
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

// states
//false = row format else its grids
// const [layout, setLayout] = useState(false);
// const ToggleViewRows = () => {
//     setLayout(false);
//     console.log(layout);
// };
// const ToggleViewGrids = () => {
//     setLayout();
//     console.log(true);
// };
