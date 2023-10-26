import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Create = () => {
  
  console.log("clicked")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const history = useNavigate()

  const header = {"Access-control-Allow-Origin": "*"}
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      'https://64019a610a2a1afebeedb308.mockapi.io/crud-youtube',
      {
        name: name, email: email,
        header,
    })
   .then(() => {
    history("/read")
   })
  
  }

  return (
    <>
    <div className='col-md-10 mx-auto'>
   <div className='d-flex justify-content-between m-2'>
    <h2>Create</h2>
    <Link to = '/read'>
    <button className='btn btn-primary'>Show data</button>
    </Link>
    </div>
        <form>

        <div className="mb-3">
   
  <div className='d-flex justify-content-start'>
  <label className="form-label">Name</label>
  </div>
   
   
    <input type="text" className="form-control" 
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
   <div className='d-flex justify-content-start'>
   <label className="form-label">Email address</label>
   </div>
    <input type="email" className="form-control"  aria-describedby="emailHelp" 
      onChange={(e) => setEmail(e.target.value)}
    />
    
  </div>
 
  <div className='d-flex justify-content-start'>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </div>
  
</form>
</div>
    </>
  )
}

export default Create