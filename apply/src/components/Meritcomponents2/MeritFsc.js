import React from 'react'
import './Merit.css'
function MeritFsc() {
  return (
    <>
<div className='container'>
    
<div id="byNew">
<label>Fsc marks</label>
<input type="number" id="fsc2" className="form-control" placeholder="fsc marks"/>
<label>out of</label><select id="i_total2" className="form-control">
<option value="600">600</option>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<option value="1100">1100</option>
<option value="1050">1050</option>
<option value="1000">1000</option>
<option value="950">950</option>
<option value="900">900</option>
</select>
<label>Test Marks</label>
<input type="number" id="mcat2" className="form-control" placeholder="Test marks"/>
<input type="number" id="test_total2" className="form-control" value="210" placeholder="Test total marks"/>
<button className="btn btn-primary mt-5"  value="calculate" name="submit" type="submit">calculate</button>

</div>
</div>
<div className='py-3'></div>
    </>
  )
}

export default MeritFsc
