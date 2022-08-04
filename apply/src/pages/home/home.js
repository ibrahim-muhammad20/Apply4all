import React from 'react'
import Card from '../../components/Cardcomponents/card'
import Carosal from '../../components/carosal'
import Description from '../../components/Description'

export default function Home() {
  return (
      <>
      <div className="container">
                <div className="row">
                <Carosal/>
                </div> 
            </div>  
            <Card/>
            
            <div className="container">
            
                   <Description/> 
              
            </div>
        </>
    
  )
}
