import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './explore.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Index from "./components/Labs";
import Tuiter from "./components/Tuiter/Tuiter";
import ExploreScreen from "./components/Tuiter/Explorescreen/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen/index.js"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route path="labs" element={<Index/>}/>
              <Route path="hello" element={<HelloWorld/>}/>
              <Route path="tuiter" element={<Tuiter/>}>
                <Route index element={<HomeScreen/>}/>
                <Route path="explore"  element={<ExploreScreen/>}/>
                </Route>
              </Route>

          </Routes>
        </div>
      </BrowserRouter>


  /*// <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      */
  );
}

export default App;
