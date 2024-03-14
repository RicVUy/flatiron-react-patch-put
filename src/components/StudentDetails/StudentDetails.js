import React from 'react'
import Detail from '../Detail/Detail'
import { v4 as uuidv4 } from 'uuid';

const StudentDetails = ({students}) => {
  const studentList = students.map((student) => {
   return <Detail key={student.id} student={student}/>
  })
  return (
    <>
    <h2>Student Details</h2>
    <div>
        {studentList}
    </div>
    </>
  )
}

export default StudentDetails