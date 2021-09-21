import styled from "styled-components";
import SideBar from "./components/sidebar";

import MainContainer from "./components/content";
import Card from "./components/card";

function App() {
    // const [Posts, setPosts] = useState(false);

    return (
        <>
            <SideBar />
            <MainContainer />
        </>
    );
}

export default App;
