import React from 'react'
import RecordFiles from './RecordFiles'
function RecordDetails({records}) {
   const recordsList = records.map((record) => {
    return <RecordFiles key={record.id} record={record} />
   })
  return (
    <div className='card-container'>
     {recordsList}
    </div>
  )
}

export default RecordDetails