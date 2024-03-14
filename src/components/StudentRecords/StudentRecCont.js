import React, {useState, useEffect} from 'react'
import RecordDetails from './RecordDetails'
function StudentRecCont() {
    const [records, setRecords] = useState([])
useEffect(() => {
    fetch("http://localhost:4001/studentRecords") 
    .then(r => r.json())
  .then(setRecords)
}, [])


  return (
    <div>
        <RecordDetails records={records}/>
    </div>
  )
}

export default StudentRecCont