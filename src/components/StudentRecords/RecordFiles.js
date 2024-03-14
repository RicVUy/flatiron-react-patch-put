import React from 'react'

function RecordFiles({record}) {
    const {
        id,
      firstName,
      lastName,
      active,
      imageUrl,
      gender,
      area,
      authorized
    } = record


  return (
    <div className='card'>
        <h3>name: {firstName} {lastName}</h3>
        <img  className="image-container" src={imageUrl} alt={firstName}/>
        </div>
  )
}

export default RecordFiles