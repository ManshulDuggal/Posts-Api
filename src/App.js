import styled from "styled-components";
import SideBar from "./components/sidebar";
import Main from "./components/content";

function App() {
    // const [Posts, setPosts] = useState(false);

    return (
        <>
            <h1>this is app components</h1>
            <SideBar />
            <Main />
        </>
    );
}

export default App;
