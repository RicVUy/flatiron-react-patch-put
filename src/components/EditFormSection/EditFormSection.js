import React, { useState} from 'react'

const EditFormSection = ({handleUpdateStudent}) => {

  const [formData, setFormData] = useState({
  id: "",
  name: "",
  username: "",
  email: "",
  address: "",
  phone: "",
  website: "",
 
})
const onInputChange = (e) => {
  const formDataCopy = {...formData}
  formDataCopy[e.target.name] = e.target.value
  setFormData(formDataCopy)
}
const removeBlankEntries = () => {
  const result = {};
  Object.entries(formData)
  .filter((entry) => entry[1])
  .forEach((entry) => (result[entry[0]] = entry[1]));
  return result;
}
const onFormSubmit = (e) => {
  e.preventDefault()
  const updatedStudentData = removeBlankEntries();
  const config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedStudentData),
  }
  fetch("http://localhost:3000/students/1", config)
  .then(resp => resp.json())
  .then(data => handleUpdateStudent(data))

  setFormData({
    id: "",
  name: "",
  username: "",
  email: "",
  address: "",
  phone: "",
  website: "",
  })
}
  return (
    <section className='card1'>
      <form  onSubmit={onFormSubmit}>
        <h1>Edit Student</h1>
       <div className='card1'>
        <label htmlFor="id">ID</label>
        <input id="id" name="ID" type="text" value={formData.id} onChange={onInputChange}/>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text"  value={formData.name}onChange={onInputChange} />
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text"  value={formData.username} onChange={onInputChange}/>
        <label htmlFor="email">Email</label>
        <input id="email" name=""email type="text"  value={formData.email} onChange={onInputChange}/>
        <label htmlFor="address">Address</label>
        <input id="address" name="address" type="text" value={formData.address} onChange={onInputChange}/>
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="text"  value={formData.phone} onChange={onInputChange}/>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text"  value={formData.website} onChange={onInputChange}/>
        </div>
        <input type="submit" />
      </form>
    </section>
  )
}

export default EditFormSection