import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([])
    const [tabledark, setTableDark] = useState('')

    function getData(){
        axios.get("https://64019a610a2a1afebeedb308.mockapi.io/crud-youtube")
        .then((res) =>{
            setData(res.data); // Update the state with fetched data
        })
    }

    function handleDelete(id) {
        axios.delete(`https://64019a610a2a1afebeedb308.mockapi.io/crud-youtube/${id}`
        ).then(() =>{
           getData()
        }
        )
   }

   const setLocalStorage = (id, name, email) =>{
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)

   }

    useEffect(() => {
        getData()
    }, [])



    return (
        <>
        <div className='col-md-10 mx-auto'>
        <div className='form-check form-switch mx-2'> 
            <input className='form-check-input' type='checkbox'
                onClick={() =>{
                    if(tabledark === 'table-dark') setTableDark('')
                    else setTableDark('table-dark')
                }}
            />
        </div>
        <div className='d-flex justify-content-between m-2'>
    <h2>Read Operation</h2>
    <Link to = '/'>
    <button className='btn btn-secondary'>Create</button>
    </Link>
    </div>
        <table className={`table ${tabledark}`}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {data.map((eachdata, index) => (
                    <tr key={index}>
                        <th scope="row">{eachdata.id}</th>
                        <td>{eachdata.name}</td>
                        <td>{eachdata.email}</td>
                        <td>
                           <Link to='/update'>
                           <button className='btn-success' onClick={() => setLocalStorage(eachdata.id, eachdata.name, eachdata.email)}>
                           Edit</button>
                           </Link>
                        </td>
                        <td>
                            <button className='btn-danger' onClick={() => handleDelete(eachdata.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Read;





