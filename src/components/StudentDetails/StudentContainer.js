import React, {useState, useEffect} from 'react'
import StudentDetails from './StudentDetails'

function StudentContainer() {
const [students, setstudents] = useState([])

useEffect(() => {
  fetch("http://localhost:4001/students") 
  .then(r => r.json())
.then(setstudents)
  
}, [])

  return (
    <div>
        <h1>Student Info</h1>
        <StudentDetails students={students}/>
        </div>
  )
}

export default StudentContainer