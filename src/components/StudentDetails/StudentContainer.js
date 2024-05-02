
import StudentDetails from './StudentDetails'

function StudentContainer({students}) {


  return (
    <div>
        <h1>Student Info</h1>
        <StudentDetails students={students}/>
        </div>
  )
}

export default StudentContainer