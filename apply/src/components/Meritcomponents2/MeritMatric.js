import React from 'react'
import './Merit.css'
function MeritMatric() {
  return (
    <>

{/* //style="display: none;" */}
<div className='container' id="byOLD sd" > 
<label>Matric marks</label>
<input type="number" id="matric" className="form-control" placeholder="matric marks"/>
<label>out of</label>
<select id="m_total" className="form-control">
<option value="1100">1100</option>
<option value="1050">1050</option>
<option value="1000">1000</option>
<option value="950">950</option>
<option value="900">900</option>
<option value="850">850</option>
<option value="800">800</option>
</select>
<label>Fsc marks</label>
<input type="number" id="fsc" className="form-control" placeholder="fsc marks"/>
<label>out of</label><select id="i_total" className="form-control">
<option value="600">600</option>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<option value="1100">1100</option>
<option value="1050">1050</option>
<option value="1000">1000</option>
<option value="950">950</option>
<option value="900">900</option>
</select>
<label>Test Marks</label>
<input type="number" id="mcat" className="form-control" placeholder="Test marks"/>
<label>Test total Marks</label>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input type="number" id="test_total" className="form-control" value="210" placeholder="Test total marks"/>
<button className="btn btn-primary mt-5"  value="calculate" name="submit" type="submit">calculate</button> 
</div>
<div className='py-3'></div>
    </>
  )
}

export default MeritMatric
