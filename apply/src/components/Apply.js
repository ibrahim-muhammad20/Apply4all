import React, { Component } from 'react'
import FastApply from './Apply Forms/FastApply';
import GeneralApply from './Apply Forms/GeneralApply';
import LumsApply from './Apply Forms/LumsApply';
import NustApply from './Apply Forms/NustApply';

export class Apply extends Component {
    constructor(props) {
        super(props);
        this.state = {
          University:{
          FAST:false,
          LUMS:false,
          NUST:false
          }
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange= (event) => {
      let state=this.state;
      state.University[event.target.value]=event.target.checked;
      this.setState(state);
        // if(event==="FAST")
        // {
        //     this.setState({FAST:true});
        // }
        // else if(event==="NUST")
        // {
        //     this.setState({NUST:true});
        // }
        // else{
        //     this.setState({LUMS:true});
        // }
    }
      render() {
    return (
        <div>
        <hr />
    <div classNameName="container mt-0 mb-0">
      
      <div className="form-check form-check-inline">
      <input className="form-check-input" type="checkbox" name="University"  onChange={this.handleChange}
       id="inlineCheckbox1" value="FAST" checked={this.state.University.FAST} />
      <label className="form-check-label" for="inlineCheckbox1">FAST</label>
      </div>
      <div className="form-check form-check-inline">
      <input className="form-check-input" type="checkbox" name="University" onChange={this.handleChange} 
      id="inlineCheckbox2" value="NUST" checked={this.state.University.NUST}/>
      <label className="form-check-label" for="inlineCheckbox2">NUST</label>
      </div>
      <div className="form-check form-check-inline">
      <input className="form-check-input" type="checkbox" name="University" onChange={this.handleChange} 
      id="inlineCheckbox3" value="LUMS" checked={this.state.University.LUMS}/>
      <label className="form-check-label" for="inlineCheckbox3">LUMS</label>
      </div>
      </div>
       <hr />


       <div>
       {this.state.University&&<GeneralApply/>}
        {this.state.University.FAST && <FastApply/>}
        {this.state.University.NUST && <NustApply/>}
        {this.state.University.LUMS && <LumsApply/>}
       
        
       </div>
          
    </div>

    )
  }
}

export default Apply

