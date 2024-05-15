import React, {useState} from 'react'
import Detail from '../Detail/Detail'
//import { v4 as uuidv4 } from 'uuid';

{/*const StudentDetails = ({students}) => {

  const studentList = students.map((student) => {
   return <Detail key={student.id} student={student}/>
  })
  return (
    <>
    <h2>Student Details</h2>
    <div >
        {studentList}
    </div>
    </>
  )
}*/}
const StudentDetails = ({students}) => {
const [searchTerm, setSearchTerm]=useState('')

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};
const filteredStudents = students.filter((student) =>
 student.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const studentList = filteredStudents.map((student) => {
   return <Detail key={student.id} student={student}/>
  })
  return (
    <>
    <div>
      <input
       className="butt"
       type="text"
      
       placeholder="Search by name..."
       value={searchTerm}
       onChange={handleSearch}
     />
     </div>
     <div className='card-container'>
    <h2>Student Details</h2>
    
        {studentList}
        
    </div>
    </>

  )
}

export default StudentDetails