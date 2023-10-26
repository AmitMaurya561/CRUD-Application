import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Update = () => {
   const [id, setId] = useState(0)
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')

   const navigate = useNavigate()

  useEffect(() => {
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`https://64019a610a2a1afebeedb308.mockapi.io/crud-youtube/${id}`,
    {
        name: name, email: email,
        
    }).then(() => {
       navigate('/read')
    })
  }

  return (
    <>
    <div className='col-md-10 mx-auto'>
         <h2>Update</h2>
        <form>

        <div className="mb-3">
   
   <div className='d-flex justify-content-start'> 
   <label className="form-label">Name</label>
   </div>
    <input type="text" className="form-control" value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
  <div className='d-flex justify-content-start'>
    <label className="form-label">Email address</label>
    </div>
    <input type="email" className="form-control"  aria-describedby="emailHelp" 
    value={email}  onChange={(e) => setEmail(e.target.value)}
    />
    
  </div>
 
  
  <div className='d-flex justify-content-start'>
  <button type="submit" className="btn btn-primary" 
  onClick={handleUpdate}>Update</button>
  <Link to = '/read'>
  <button className="btn btn-secondary mx-2" 
  >Back</button>
  </Link>
  </div>
</form>
</div>
    </>
  )
}

export default Update