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
      <Spline scene="https://prod.spline.design/aPr18i9XwE7YwH3j/scene.splinecode" />
      <Content>
        <h1>To Do App</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div
          onClick={() => navigate("notes")}
          class="flex-row flex justify-center items-center outline outline-black p-4 rounded-xl hover:bg-darkmodeendbg duration-300 hover:scale-110 hover:shadow-2xl transition-all"
        >
          <MdSpaceDashboard
            class="relative flex items-center justify-center 
    h-12 w-12 mt-2 mb-2 mx-auto  
  bg-lightmodestartbg hover:bg-lightmodeendbg  
  text-lightmodeendbg hover:text-white
rounded-xl 
    transition-all duration-150 ease-linear
    cursor-pointer shadow-lg"
            size="28"
            onClick={() => navigate("notes")}
          ></MdSpaceDashboard>
          <h5 class="font-bold text-lg ml-2 text-black">Go To Notes</h5>
        </div>
      </Content>
    </Wrapper>
  );
};

const NotesPage = () => (
  <div className="flex bg-gradient-to-r from-lightmodestartbg to-lightmodeendbg  dark:bg-gradient-r dark:from-darkmodestartbg dark:to-darkmodeendbg transition-colors duration-1000">
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
align-items: center; 
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
