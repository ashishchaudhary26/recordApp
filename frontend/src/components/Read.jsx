import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Read = () => {
 const [data,setData]=useState();
 const [error,setError]=useState("");
 async function getData(){
    const response= await fetch("http://localhost:5000/");

    const result= await response.json();

    if(!response.ok){
      console.log(result);
      setError(result.error);
    }
    if(response.ok){
      setData(result);
    }

 } 
 const handleDelete=async (id)=>{
  const response =await fetch(`http://localhost:5000/delete/${id}`,{
    method:'DELETE',
  });
  const result=await response.json();
  if(!response.ok){
    console.log(result.error);
    setError(result.error);
  }
  if(response.ok){
    setError("Deleted Succesfully");
    setTimeout(()=>{
      setError("");
      getData();
    },1000);
  }

 }



useEffect (()=>{
  getData()
},[]);

console.log(data);

return (
  <div className='page-container' style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
    {error && <div className="alert alert-danger">{error}</div>}
    <h2 className='text-center mb-4' style={{ color: '#3498db' }}>All Data</h2>
    <div className='row'>
      {data?.map((ele) => (
        <div key={ele._id} className='col-md-3'>
          <div className="card mb-4" style={{ backgroundColor: '#ecf0f1', borderRadius: '10px' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#3498db' }}>{ele.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
              <p className="card-text">{ele.age}</p>
              <h5 className="card-title" style={{ color: '#e74c3c' }}>{ele.detail}</h5>
              <Link to={`/${ele._id}`} className="btn btn-primary mr-2">Edit</Link>
              <button className="btn btn-danger" onClick={() => handleDelete(ele._id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
