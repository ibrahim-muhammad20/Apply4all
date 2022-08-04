import React from 'react'
import axios from 'axios'
import { useState } from "react";
export default function GeneralApply() {
    const [form, setForm]=useState({
        firstname: '',
          middlename: '',
          lastname: '',
          gender: '',
          dateofBirth: '',
          matricolevel :'',
          idcard: '',
          passportNo: '',
          martialStatus: '',
          phone: '',
          nationality: '',
          dualNationality: '',
          
 
    });
    const [error, setError] = useState(false);
   
    
    const handleChange=({currentTarget:input})=>{
        setForm({...form,[input.name]:input.value});
    };

    const handleSubmit = async (e)=>{
      e.preventDefault();
      setError(false);
      try{
        alert("Data Stored");
        // const url="/auth/register";
        await axios.post('/form/apply',form);
        window.location.replace("/home");
        // window.location.replace("/login");
        setForm({
            firstname:"",
            middlename: "",
            lastname:  "",
            gender:  "",
            dateofBirth: "",
            matricolevel : "",
            idcard:  "",
            passportNo:  "",
            martialStatus: "",
            phone: "",
            nationality: "",
            dualNationality: "",
           
         
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
            <h1>Genaralized Application Form </h1>
        </div>
        <hr/>
        <form onSubmit={handleSubmit}>
        <div className="row g-5 mt-1">
            <div className="col-6">
                <label for="inputname" className="form-label">First Name</label>
                <input type="text" name='firstname' className="form-control" id="inputname"   placeholder="Enter first name" onChange ={handleChange}
                value = {form.firstname}/>
            </div>
            <div className="col-6">
                <label for="inputname" className="form-label">Middle Name</label>
                <input type="text" name='middlename' className="form-control" id="inputname" placeholder="Enter Middle name"
                onChange={handleChange}
                value= {form.middlename}/>
            </div>
        </div>

        <div className="row g-5 mt-1">
            <div className="col-6">
                <label for="inputname" className="form-label">Last Name</label>
                <input type="text" name='lastname' className="form-control" id="inputname" placeholder="Enter first name"
                onChange={handleChange}
                value = {form.lastname}/>
            </div>
            <div className="col-6">
                <label for="inputname" className="form-label">Gender</label>
                <select className="form-select" aria-label="Default select example" name='gender' id="inputname" onChange ={handleChange}
                value = {form.gender}>
                    <option selected>Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                </select>
            </div>  
        </div>

        <div className="row g-5 mt-1">
            <div className="col-6">
                <div className="row">
                    <label for="inputname" className="form-label">Date of Birth</label>
                    <input type="text" name='dateofBirth' className="form-control" id="inputname" placeholder="DD/MM/YY" 
                    onChange={handleChange}
                    value= {form.dateofBirth}/>

                </div>
                
              
            </div>
            <div className="col-6">
            <label for="inputname" className="form-label">MATRIC/Olevel Equivalency</label>
                <input type="text" name='matricolevel' className="form-control" id="inputname" placeholder="Enter Equivalency"
                onChange={handleChange}
                value={form.matricolevel}/>
            </div>
        </div>

        <div className="row g-5 mt-1">
            <div className="col-6">
                <label for="inputname" className="form-label">National Identity Card</label>
                <input type="text"name='idcard' className="form-control" id="inputname" placeholder="_ _ _ _ _-_ _ _ _ _ _ -_"
                onChange={handleChange}
                value={form.idcard}/>
            </div>
            <div className="col-6">
                <label for="inputname" className="form-label">Passport No.</label>
                <input type="text" name='passportNo' className="form-control" id="inputname" placeholder="Enter Passport"
                onChange={handleChange}
                value ={form.passportNo}/>
            </div>
        </div>

        <div className="row g-5 mt-1">
            <div className="col-6">
                <label for="inputname" className="form-label">Martial Status</label>
                <select className="form-select" name='martialStatus' aria-label="Default select example" id="inputname"
                 onChange={handleChange}
                 value ={form.martialStatus}>
                    <option selected>[Select an option]</option>
                    <option value="1">Married</option>
                    <option value="2">Single</option>
                </select>
            </div>
            <div className="col-6">
                <div className="col-6">
                    <label for="inputname" className="form-label">Mobile Number</label>
                    <input type="text" name='phone' className="form-control" id="inputname" placeholder="Mobile No"
                     onChange={handleChange}
                     value ={form.phone}/>
                </div>
            </div>
        </div>
        <div className="row g-5 mt-1 mb-5">
            <div className="col-6">
                <label for="inputname" className="form-label">Nationality</label>
                <select className="form-select"  name='nationality' aria-label="Default select example" id="inputname"
                 onChange={handleChange}
                 value ={form.nationality}>
                    <option selected>[Choose option]</option>
                    <option value="1">Pakistani</option>
                    <option value="2">American</option>
                    <option value="3">US</option>
                </select>
            </div>
    
            <div className="col-6">
               <div className="row">
                   <div className="col-3">
                       Do you have dual nationality
                   </div>
                   <div className="col-6">
                   <select className="form-select"  name='dualNationality' aria-label="Default select example" id="inputname"
                 onChange={handleChange}
                 value ={form.dualNationality}>
                    <option selected>No</option>
                    <option value="1">Yes</option>
                    
                </select>
                    </div>  
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
