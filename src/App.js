import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './explore.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Index from "./components/Labs";
import Tuiter from "./components/Tuiter/Tuiter";
import ExploreScreen from "./components/Tuiter/Explorescreen/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen/index.js";
import ProfileScreen from "./components/Tuiter/ProfileScreen/index";
import EditProfile from "./components/Tuiter/ProfileScreen/EditProfile";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Index/>}/>
              <Route path="labs" element={<Index/>}/>
              <Route path="hello" element={<HelloWorld/>}/>
              <Route path="tuiter" element={<Tuiter/>}>
                <Route index element={<HomeScreen/>}/>
                <Route path="explore"  element={<ExploreScreen/>}/>
                <Route path="profile" element={<ProfileScreen/>}/>
                <Route path="editprofile" element={<EditProfile/>}/>
                </Route>
              </Route>

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
