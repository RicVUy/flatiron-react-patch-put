import React from 'react'

function Applicants({applicant}) {
    const {
        id,
        fullName,
        username,
        email,
        address,
        phone,
        testScore,
        program,
        interview,
        admissionStatus
    } = applicant


  return (
    <div className='card'>
        
        <p>Identification number: {id}</p>
        <h4>Name: {fullName}</h4>
        <p>Username: {username}</p>
        <p>email: {email}</p>
        <p>address: {address}</p>
        <p>phone: {phone}</p>
        <p>testScore: {testScore}</p>
        <p> program: {program} </p>
        <p> interview: {interview} </p>
        <p> Admission status: {admissionStatus}</p>
    </div>
        
  )
}

export default Applicants