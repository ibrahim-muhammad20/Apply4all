import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Navb from "./components/Navb";
import Navu from "./components/Navu";
import Description from "./components/Description";
import Carosal from "./components/carosal";
import Footer from "./components/Footercomponents/Footer";
import Card from "./components/Cardcomponents/card";
import Card1 from "./components/MeritCardCompo/card1";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserProfile from "./components/CreateUserProfile/UserProfile";
import Fa from "./components/Fa";
import Apply from "./components/Apply";
import Programoffered from "./components/Programoffered";
import Ranking from "./components/ranking";
import Signup from "./components/Signup/signup";
import FastMerit from "./components/MeritCardCompo/FastMerit";
import PUCITMerit from "./components/MeritCardCompo/PUCITMerit";
import AirMerit from "./components/MeritCardCompo/AirMerit";
import ComsatsMerit from "./components/MeritCardCompo/ComsatsMerit";
import ITUMerit from "./components/MeritCardCompo/ITUMerit";
import IBAMerit from "./components/MeritCardCompo/IBAMerit";

function App() {
  return (
    <Router>
      <div className="App">
        {/* STICKY-BODY */}
        <Navu />
        <Navbar />
        <Navb />

        <Routes>
          {/* <Mainbody/> */}
          <Route
            exact
            path="/home"
            element={
              <>
                <div className="container">
                  <div className="row">
                    <Carosal />
                  </div>
                </div>
                {/* <div className="row"> */}
                <Card />
                {/* </div> */}

                <div className="container">
                  <div className="offset-3 row-4">
                    <Description />
                  </div>
                </div>
              </>
            }
          ></Route>
          {/* DEFAULT BODY */}
          <Route
            exact
            path="/"
            element={
              <>
                <div className="container">
                  <div className="row">
                    <Carosal />
                  </div>
                </div>
                <Card />
                <div className="container">
                  <div className="offset-3 row-4">
                    <Description />
                  </div>
                </div>
              </>
            }
          ></Route>
          {/* MERIT CALCULATOR */}
          <Route exact path="meritcalculator" element={<Card1 />}></Route>
          <Route>
            <Route
              exact
              path="meritcalculator/fastMerit"
              element={<FastMerit />}
            />
          </Route>
          <Route>
            <Route
              exact
              path="meritcalculator/pucitMerit"
              element={<PUCITMerit />}
            />
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
          <Route exact path="apply" element={<Apply />}></Route>
          {/* CREATE USER PROFILE */}
          <Route exact path="userprofile" element={<UserProfile />}></Route>
          {/*Sign in  */}
          <Route exact path="signup" element={<Signup />}>
            <Route exact path="userprofile" element={<UserProfile />} />
          </Route>
          {/* FINANCIAL AID */}
          <Route exact path="financialaid" element={<Fa />}></Route>
          {/* PROGRAMS OFFERED */}
          <Route
            exact
            path="programsoffered"
            element={<Programoffered />}
          ></Route>
          {/* Rankings*/}
          <Route exact path="ranking" element={<Ranking />}></Route>

          {/* FOOTER STICKY          */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
