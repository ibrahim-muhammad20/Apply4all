
import "./App.css";
import Footer from "./components/Footercomponents/Footer";
import Fa from "./components/Fa";
import Apply from "./components/Apply";
import Programoffered from "./components/Programoffered";
import Ranking from "./components/ranking";
import Login from "./components/Signup/Login";
import Register from "./components/CreateUserProfile/Register";
import Home from "./pages/home/home";
import TopBar from "./components/Topbar/topbar";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "./context/Context";
import TopBar2 from "./components/Topbar/topbar2";
import UserProfile from "./components/Userprofile/UserProfile";
import Updatep from "./components/UpdateProfile/Updatep";
import Forget from "./components/Forget/Forget";
import Reset from "./components/Forget/Reset";
import FastMerit from "./components/MeritCardCompo/MeritCardCompo/FastMerit";
import PUCITMerit from "./components/MeritCardCompo/MeritCardCompo/PUCITMerit";
import AirMerit from "./components/MeritCardCompo/MeritCardCompo/AirMerit";
import ComsatsMerit from "./components/MeritCardCompo/MeritCardCompo/ComsatsMerit";
import ITUMerit from "./components/MeritCardCompo/MeritCardCompo/ITUMerit";
import IBAMerit from "./components/MeritCardCompo/MeritCardCompo/IBAMerit";
import Card1 from "./components/MeritCardCompo/MeritCardCompo/card1";
import Search from "./components/Search";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <div className="App">
        {/* STICKY-BODY */}
        {user?<TopBar2 />:<TopBar/>}
        <Routes>
          {/* <Mainbody/> */}
          <Route exact path="/home" element={<Home />}></Route>
          {/* DEFAULT BODY */}
          <Route exact path="/" element={<Home />}></Route>
          {/* MERIT CALCULATOR */}
          {/* <Route exact path="meritcalculator" element={user ? <Merit /> : <Register />}>
            <Route exact path="meritFsc" element={<MeritFsc />} />
            <Route exact path="meritMatric" element={<MeritMatric />} />
          </Route> */}
          <Route exact path="meritcalculator" element={user ? <Card1/>: <Register />}></Route>
          <Route>
            <Route exact path="meritcalculator/fastMerit" element={<FastMerit/>}/>
            </Route>
          <Route> 
            <Route exactpath="meritcalculator/pucitMerit" element={<PUCITMerit />}/>
          </Route>
          <Route>
            <Route
              exact
              path="meritcalculator/airMerit"
              element={<AirMerit />}
            />
          </Route>
          <Route>
            <Route
              exact
              path="meritcalculator/comsatsMerit"
              element={<ComsatsMerit />}
            />
          </Route>
          <Route>
            <Route
              exact
              path="meritcalculator/ituMerit"
              element={<ITUMerit />}
            />
          </Route>
          <Route>
            <Route
              exact
              path="meritcalculator/ibaMerit"
              element={<IBAMerit />}
            />
          </Route>
          {/* APPLY        */}
          <Route exact path="apply" element={user ? <Apply /> : <Register />}></Route>
          <Route exact path="search" element={user? <Search/> :<Register/>}></Route>
          {/* CREATE USER PROFILE */}
          <Route exact path="register" element={<Register />}></Route>
          {/*Sign in  */}
          <Route exact path="login" element={ <Login />}>
            
            {/* <Route exact path="Register" element={<Register1/>} /> */}
          </Route>
          {/* FINANCIAL AID */}
          <Route exact path="financialaid" element={user ? <Fa /> : <Register />}></Route>
          <Route exact path="/userprofile" element={user ? <UserProfile /> : <Register />}></Route>
          <Route exact path="/update" element={user ? <Updatep /> : <Register />}></Route>

          <Route exact path="reset" element={<Forget />}></Route>

          {/* PROGRAMS OFFERED */}
          <Route exact path="programsoffered" element={user ? <Programoffered /> : <Register />}></Route>
          {/* Rankings*/}
          <Route exact path="ranking" element={user ? <Ranking /> : <Register />}></Route>
          <Route exact path="/change-password/:slug" element={<Reset />} ></Route>


          {/* FOOTER STICKY*/}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
