import SideBar from "./components/SideBar";
import NotesContainer from "./components/NotesContainer";
import "./App.css";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { useNavigate, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="notes" element={<NotesPage />} />
    </Routes>
  );
}

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Spline scene="https://prod.spline.design/yrtSzQB2GcFgXdvL/scene.splinecode" />
      <Content>
        <h1>To Do App</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/notes">CLICK ME</Link>
        {/* <button onClick={() => navigate("notes")}>CLICK ME</button> */}
        {/* <MdSpaceDashboard onClick={navigate("./notes")}></MdSpaceDashboard> */}
      </Content>
    </Wrapper>
  );
};

const NotesPage = () => (
  <div className="flex bg-gradient-to-r from-cyan-400 to-blue-300 dark:bg-gradient-r dark:from-purple-400 dark:to-cyan-600 transition-colors duration-1000">
    <SideBar />
    <NotesContainer />
  </div>
);
const Wrapper = styled.div`
  font-size: 16px;
  color: white;
  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }
`;

const Content = styled.div`
position: absolute;
top: 30px;
display: flex;
flex-direction: column;
gap: 80px;
h1 {
  font-weight: bold;
  font-size: 70px;
  color: black;
  margin: 0;
  max-wdith: 500px;
}
p {
  font-weight: normal
  line-height: 150%;
  max-width 300px;
  color: black;
}
h1, p {
  margin: 0 30px 0 100px;
}
`;

export default App;
