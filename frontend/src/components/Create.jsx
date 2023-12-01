import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


 export const Create = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState(0);
  const [detail,setDetail]=useState("");
  // console.log({Name,Email,Age});
  const Navigate=useNavigate();

  const [error,setError]=useState("");

   const handlesubmit=async (e)=>{
    e.preventDefault();   
    const addUser={name,email,age,detail};
    const response= await fetch("http://localhost:5000",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(addUser),
    });

    const result=await response.json();
    if(!response.ok){
      console.log(result);
      setError(result.error);
    }
    if(response.ok){
      console.log(result);
      setError("");
      setName("");
      setEmail("");
      setAge(18);
      setDetail("")
      Navigate("/all");
    }
   }


   return (
    <div className='container my-5' style={{ backgroundColor: '#ecf0f1', padding: '20px', borderRadius: '10px'} }>
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 className='text-center mb-4' style={{ color: '#3498db' }}>Enter the Data</h2>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label className="form-label" style={{ color: '#3498db' }}>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: '#e74c3c' }}>Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: '#27ae60' }}>Age</label>
          <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: '#f39c12' }}>Details</label>
          <textarea className="form-control" value={detail} onChange={(e) => setDetail(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#3498db', border: 'none' }}>Submit</button>
      </form>
    </div>
  );
};
// export default Create;
