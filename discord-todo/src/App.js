import SideBar from "./components/SideBar";
import NotesContainer from "./components/NotesContainer";
import "./App.css";

function App() {
  return (
    // should workSHEEEEEEE, oh i thought it had smth to do with the fact that they had independent bg?
    // yeah p much

    // the issue was that both the container (below this line)
    // and the wrapper for the cards had the same styles for bg
    // so the gradient was stretched smaller in the middle element
    // making the weird border bit
    // also use scss
    // its better <- how so
    /*
    before (css):
    .class {
      // styles
    }
    .class span {
      // inner styles for span
    }
    .class span div {
      // inner inner styles for div
    }
    // on and on

    after (scss (sass)) (btw you use .scss files for better syntax than sass): 
    .class {
      // styles
      span {
        // inner styles for span
        div {
          // inner styles for div
        }
      }
    }

    yeah
    ok thx
    jackson W nice

    yeah imma just brute force it for now
    and then ill learn that later for my nepotism tech internship hehe
    nice
    last last thing:
    check out react router
    and make tests 
    i rarely use tests, only if i need to unit test a specific function
    for a speficic output when it matters a lot but sometimes
    people like to see that you have the ability to write tests
    create-react-app gives you jest library by default so write tests with that
    i see, ill look into that as well, although i dont think it will matter for the tech interview
    aight cool beans adios
    */

    <div className="flex bg-gradient-to-r from-cyan-400 to-blue-300 dark:bg-gradient-r dark:from-purple-400 dark:to-cyan-600 transition-colors duration-1000">
      <SideBar />
      <NotesContainer />
    </div>
  );
}

export default App;
