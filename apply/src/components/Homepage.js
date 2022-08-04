import { useLocation } from "react-router";
import logo from "../logo.svg";
import "../App.css";

import Navbar from "./Navbar";
import Navb from "./Navb";
import Navu from "./Navu";
import Description from "./Description";
import Carosal from "./carosal";
import Footer from "./Footercomponents/Footer";
import Card from "./Cardcomponents/card";

function Homepage() {


  const location = useLocation();
  console.log(location);
  return (
      

   
      
   <div className="App">
{/* STICKY-BODY */}
       
        

{/* <Mainbody/> */}
         
           <div className="container">
                <div className="row">
                <Carosal/>
                </div>
            
            
            </div>
            {/* <div className="row"> */}
            <Card/>
            {/* </div> */}
            
            <div className="container">
              <div className="">
                   <Description /> 
              </div>
            </div>
          
          
{/* DEFAULT BODY */}
           <div className="container">
                <div className="row">
                <Carosal/>
                  
                </div>
            </div>
            <Card/>
            <div className="container">
              
                   <Description /> 
              
            </div>
          
 
 {/* FOOTER STICKY          */}

      </div> 
  );
}

export default Homepage;
