import React from 'react'

function Input() {
  return (
    <>
     <div className="collapse-content"> 
    
    <div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label>
    <label className="input-group">
      <span>N</span>
      <input type="text" placeholder="" className="input input-bordered" />
    </label>
  </div>
  
  <div className="form-control">
    <label className="label">
      <span className="label-text">Lastname</span>
    </label>
    <label className="input-group">
      <span>LN</span>
      <input type="text" placeholder="" className="input input-bordered" />
    </label>
  </div>
  
  <div className="form-control">
    <label className="label">
      <span className="label-text">DateOfBirth</span>
    </label>
    <label className="input-group">
      <span>DOB</span>
      <input type="text" placeholder="" className="input input-bordered" />
    </label>
  </div>
  
  <div className="form-control">
    <label className="label">
      <span className="label-text">Symptoms</span>
    </label>
    <label className="input-group">
      <span>Symp</span>
      <input type="text" placeholder="" className="input input-bordered" />
    </label>
  </div>
  
    </div>
    </>
  )
}

export default Input
