import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function NustApply() {
    const [nust, setNust]=useState({
        netmarks:'' ,
        preferredcampus:'',
         hostel: '',
         applybefore: '',
         curricularactivities:'',
         program: '',
 
    });

    const [error, setError] = useState(false);
   
                                  
    const handleChange=({currentTarget:input})=>{
        setNust({...nust,[input.name]:input.value});
    };

    const handleSubmit = async (e)=>{
      e.preventDefault();
      setError(false);
      try{
        alert("Data Stored");
        // const url="/auth/register";
        await axios.post('/form/nust',nust);
        window.location.replace("/Home");
        setNust({
             netmarks:'' ,
             preferredcampus:'',
              hostel: '',
              applybefore: '',
              curricularactivities:'',
              program: '',
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
        <span className="sp"><h1>NUST FORM</h1></span>{" "}
        </div>
        <div className="row g-5 mt-1">
            <div className="col-6">
                <label for="inputname" className="form-label">Enter NET Marks(if given) </label>
                <input type="text" className="form-control" id="inputname" placeholder="NET MARKS" onChange={handleChange}
                value={nust.netmarks}/>
            </div>
            <div className="col-6">
            <label for="inputname" className="form-label">Preferred Campus</label>
                <select className="form-select" aria-label="Default select example" id="inputname" onChange={handleChange}
                value={nust.preferredcampus}>
                    <option selected>[Select Campus]</option>
                    <option value="1">Islamabad-H12</option>
                    <option value="2">Rawalpindi</option>
                    <option value="3">Karachi</option>
                </select>
            </div>
        </div>
        <div className="row g-5 mt-1">
            <div className="col-6">
            <label for="inputname" className="form-label">Do you require Hostel Residence</label>
                <select className="form-select" aria-label="Default select example" id="inputname" onChange={handleChange}
                value={nust.hostel}>
                    <option selected>No</option>
                    <option value="1">Yes</option>
                </select>
            </div>
            <div className="col-6">
            <label for="inputname" className="form-label">Did you apply to NUST Before</label>
                <select className="form-select" aria-label="Default select example" id="inputname" onChange={handleChange}
                value={nust.applybefore}>
                    <option selected>No</option>
                    <option value="1">Yes</option>
                </select>
            </div>
        </div>  
        <div className="row g-5 mt-1">
            <div className="col-6">
            <label for="exampleFormControlTextarea1">List Your Curricular Activities</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-6">
            <label for="inputname" className="form-label">Program</label>
                <select className="form-select" aria-label="Default select example" id="inputname" onChange={handleChange}
                value={nust.program}>
                    <option selected>[Select Program]</option>
                    <option value="1">Civil Engineering</option>
                    <option value="1">Mechanical Engineering</option>
                    <option value="2">Chemical Engineering</option>
                    <option value="3">Aeronautical engineer</option>
                    <option value="4">CS</option>
                    <option value="5">SE</option>
                    <option value="6">Media and Science</option>
                

                </select>
        </div>
        </div>
    </div>
    </div>
  )
}
