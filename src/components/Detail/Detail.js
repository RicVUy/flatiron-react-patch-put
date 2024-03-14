import React from 'react'

const Detail = ({student}) => {
  const {
    name,
    username,
    email,
    image,
    address,
    phone,
    website

  } = student
  return (
    <div>
        <h3>Name: {name}</h3>
        <p>Username: {username}</p>
        <p>email: {email}</p>
        <p>address: {address}</p>
        <p>phone: {phone}</p>
        <p>website: {website}</p>
    </div>
  )
}

export default Detail

