import React from 'react'
import { useState } from 'react';
import axios from 'axios';


export default function FastApply() {
    const [fast, setFast]=useState({
        siblings: '',
        fscmarks: '',
          preferredcampus: '',
          overseas: '',
          applyingfor: '',
          program :'',
          repeater: '',
          achievements: '',
          choosef:'',

 
    });
    const [error, setError] = useState(false);
   
    
    const handleChange=({currentTarget:input})=>{
        setFast({...fast,[input.name]:input.value});
    };

    const handleSubmit = async (e)=>{
      e.preventDefault();
      setError(false);
      try{
        alert("Data Stored");
        // const url="/auth/register";
        await axios.post('/form/fast',fast);
        window.location.replace("/Home");
        setFast({
          siblings: '',
          fscmarks: '',
          preferredcampus: '',
          overseas: '',
          applyingfor: '',
          program :'',
          repeater: '',
          achievements: '',
          choosef:'',
         
        })

      }catch(error)
      
      {
        if(error.response &&error.response.status>=400 && error.response.status<=500)
        {
          setError(true)
        }
      }
      }

    
  return (
    <div>
       <div className="container">
        <div className="row mt-4 mb-4">
        <span className="sp"><h1>FAST FORM</h1></span>{" "}
        </div>
        <div className="row g-5 mt-1">
            <div className="col-6">
                <label for="inputname" className="form-label">Siblings</label>
                <select className="form-select" name="siblings" aria-label="Default select example" id="inputname" onChange={handleChange}
                value={fast.siblings}>
                    <option selected>[How many Siblings]</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4+</option>
                </select>
            </div>
            <div className="col-6">
                <label for="inputname" className="form-label">FSC PART 1 Marks</label>
                <input type="text"  name="fscmarks" className="form-control" id="inputname" placeholder="Enter Your Marks" onChange={handleChange}
                value={fast.fscmarks}/>
            </div>
        </div>
        <div className="row g-5 mt-1">
            <div className="col-6">
            <label for="inputname" className="form-label">Preferred Campus</label>
                <select className="form-select"  name="preferredcampus" aria-label="Default select example" id="inputname" onChange={handleChange}
                value={fast.preferredcampus}>
                    <option selected>[Select Campus]</option>
                    <option value="1">Lahore</option>
                    <option value="2">Islamabad</option>
                    <option value="3">Karachi</option>
                    <option value="3">Peshawar</option>
                </select>
            </div>
            <div className="col-6">
            <label for="inputname" className="form-label">Are you an Overseas Student</label>
            <select className="form-select" aria-label="Default select example" name="overseas" id="inputname" onChange={handleChange}
                value={fast.overseas}>
                    <option selected>No</option>
                    <option value="1">Yes</option>
                
                   
                </select>
            </div>
        </div>  
        <div className="row g-5 mt-1">
            <div className="col-6">
            <label for="inputname" className="form-label">Applying For</label>
                <select className="form-select"  name="applyingfor" aria-label="Default select example" id="inputname" onChange={handleChange}
                value={fast.applyingfor}>
                    <option selected>[Degree]</option>
                    <option value="1">Masters</option>
                    <option value="2">Bachelors</option>
                </select>
            </div>
            <div className="col-6">
            <label for="inputname" className="form-label">Program</label>
                <select className="form-select"  name="program" aria-label="Default select example" id="inputname" onChange={handleChange}
                value={fast.program}>
                    <option selected>[Select Program]</option>
                    <option value="1">CS</option>
                    <option value="2">EE</option>
                    <option value="3">DS</option>
                    <option value="4">Civil Engineering</option>
                    <option value="5">BBA</option>

                </select>
            </div>
        </div>
        <div className="row g-5 mt-1">
            <div className="col-6">
                <label for="inputname" className="form-label">Are you a Repeater</label>
                <select className="form-select"  name="repeater" aria-label="Default select example" id="inputname" onChange={handleChange}
                value={fast.repeater}>
                    <option selected>No</option>
                    <option value="1">Yes</option>
                
                </select>
            </div>
            <div className="col-6">
            <label for="exampleFormControlTextarea1">List Your Achievements</label>
                <textarea class="form-control"  name="achievements" id="exampleFormControlTextarea1" rows="3" onChange={handleChange}
                value={fast.achievements}></textarea>
            </div>
            </div>
        </div>
        <div className="row g-5 mt-1 mb-5">
        <div className="d-inline col-12 ">
            <label className="mb-2" for="exampleFormControlTextarea1">Why Choose Fast</label>
            <div className="container col-10">
                <textarea class="form-control"  name="choosef" id="exampleFormControlTextarea1" rows="5" onChange={handleChange}
                value={fast.choosef}></textarea>
            </div>
        </div>
        </div>
    </div>
  )
}
