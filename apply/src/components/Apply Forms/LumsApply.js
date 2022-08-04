import React from 'react'
import axios from 'axios'
import { useState } from "react";
export default function LumsApply() {
    const [form, setForm]=useState({
        sat1: '',
         program: '',
          fatherNIC: '',
         fathersIncome: '',
         Nop: '',
         HostelResidence :'',
          EducationBg :'',
         Appliedbefore: '',
         Coverletter:''
 
    });
    const [error, setError] = useState(false);
   
    
    const handleChange=({currentTarget:input})=>{
        setForm({...form,[input.name]:input.value});
    };

    const handleSubmit = async (error)=>{
      error.preventDefault();
      setError(false);
      try{
        alert("Data Stored");
        // const url="/auth/register";
        axios.post('/form/Lums',form);
        window.location.replace("/home");
        // window.location.replace("/login");
        setForm({
            sat1: '',
            program: '',
             fatherNIC: '',
            fathersIncome: '',
            Nop: '',
            HostelResidence :'',
             EducationBg :'',
            Appliedbefore: '',
            Coverletter:'',
           
         
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
       {console.log("User",form)}
        <div className="row mt-4 mb-4">
        <span className="sp"><h1>LUMS FORM</h1></span>{" "}
        </div>
        <form onSubmit={handleSubmit}>
        <div className="row g-5 mt-1">
            <div className="col-6">
            <label for="inputname" className="form-label">SAT 1 Marks</label>
                <input type="text" className="form-control" name="sat1" value = {form.sat1} onChange ={handleChange} id="inputname" placeholder="Enter Your Marks"/>
            </div>
            <div className="col-6">
            <label for="inputname" className="form-label">Program</label>
                <select className="form-select" name="program" value = {form.program}  onChange ={handleChange} aria-label="Default select example" id="inputname">
                    <option selected>[Select Program]</option>
                    <option value="1">BBA</option>
                    <option value="1">CS</option>
                    <option value="2">EE</option>
                    <option value="3">DS</option>
                    <option value="4">Civil Engineering</option>
                    <option value="5">SE</option>
                    <option value="6">Mechanical Engineering</option>
                    <option value="7">Biology</option>

                </select>
            </div>
        </div>
        <div className="row g-5 mt-1">
            <div className="col-6">
                <label for="inputname" className="form-label">Father's National Identity Card#</label>
                <input type="text" className="form-control" name="fatherNIC"  value = {form.fatherNIC} onChange ={handleChange} id="inputname" placeholder="NIC"/>
            </div>
            <div className="col-6">
                <label for="inputname" className="form-label">Father's Rougly Income</label>
                <input type="text" className="form-control" name="fathersIncome" value = {form.fathersIncome} onChange ={handleChange} id="inputname" placeholder="Income"/>
            </div>
        </div>  
        <div className="row g-5 mt-1">
            <div className="col-6">
            <label for="inputname" className="form-label">Have You applied for NOP Program</label>
                <select className="form-select" value = {form.Nop} name="Nop" onChange ={handleChange} aria-label="Default select example" id="inputname">
                    <option selected>No</option>
                    <option value="1">Yes</option>
                
                </select>
            </div>
            <div className="col-6">
            <label for="inputname" className="form-label">Do you require hostel residence</label>
                <select className="form-select" value = {form.HostelResidence} name="HostelResidence" onChange ={handleChange} aria-label="Default select example" id="inputname">
                    <option selected>Select</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                
                </select>
            </div>
        </div>
        <div className="row g-5 mt-1">
            <div className="col-6">
                <label for="inputname" className="form-label">Education Background</label>
                <select className="form-select" value = {form.EducationBg} name="EducationBg" onChange ={handleChange} aria-label="Default select example" id="inputname">
                    <option selected>Select an option</option>
                    <option value="1">O/Alevels</option>
                    <option value="2">MATRIC/FSC</option>
                    <option value="3">Other</option>
                </select>
            </div>
            <div className="col-6">
            <label for="inputname" className="form-label">Have you applied to LUMS before</label>
                <select className="form-select" value = {form.Appliedbefore} name="Appliedbefore" onChange ={handleChange} aria-label="Default select example" id="inputname">
                    <option selected>Select</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                
                </select>
            </div>
        </div>
        <div className="row g-5 mt-1 mb-5">
        <div className="d-inline col-12 ">
        <label className="mb-2" for="exampleFormControlTextarea1">Cover Letter</label>
            <div className="container col-10">
                <textarea class="form-control"   onChange ={handleChange} name="Coverletter" value = {form.Coverletter} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
        </div>
    </div>
    <div className="row">
          <div className="d-inline py-2 col-12">
                <button type="button " class="btn btn-lg btn-warning">Submit</button>
          </div>
         </div> 
    </form>
    </div>
    </div>
  )
}
