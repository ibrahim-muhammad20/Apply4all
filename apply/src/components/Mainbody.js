import React from 'react'
import Card from "./Cardcomponents/card";
import Description from "./Description";
import Carosal from "./carosal";
export default function Mainbody() {
  return (
    <div>
      <div className="container">
                <div className="row">
                <Carosal/>
                  
                </div>
            </div>
            <Card/>
            <div className="container">
              <div className="offset-3 row-4">
                   <Description /> 
              </div>
            </div>
    </div>
  )
}
