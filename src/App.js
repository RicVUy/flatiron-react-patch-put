import React, {useState, useEffect} from 'react'
//import EditFormSection from "./components/EditFormSection/EditFormSection";
//import StudentDetails from "./components/StudentDetails/StudentDetails";
import './App.css';
import Header from "./components/Header/Header";
import StudentContainer from "./components/StudentDetails/StudentContainer";
import StudentApplicant from "./components/StudentRecords/StudentApplicant";
import QuestionCard from "./components/Questions/QuestionCard";
import StudentEdit from "./components/EditFormSection/StudentEdit";
import AddStudent from './components/AddStudent/AddStudent';
import ApplicantForm from './components/ApplicantForm/ApplicantForm';
function App() {
  const [students, setstudents] = useState([])

  useEffect(() => {
    fetch("http://localhost:4001/students") 
    .then(r => r.json())
  .then(setstudents)
    
  }, [])

  const [applicants, setApplicants] = useState([])
  useEffect(() => {
      fetch("http://localhost:4001/studentApplicants") 
      .then(r => r.json())
    .then(setApplicants)
  }, [])
  function handleAddStudent(newStudent){
    setstudents([...students, newStudent])
    }
    function handleAddApplicant(newApplicant){
      setApplicants([...applicants, newApplicant])
      }
  return (
    <>
    <div className="App">
     <Header/>
     </div>
     <main className="main-section">
      <p className = "student-details">
     <StudentContainer students={students} setstudents={setstudents}/>
     </p>
     </main>
     <StudentApplicant applicant={applicants}/>
     <QuestionCard/>
    <AddStudent onAddStudent={handleAddStudent}/>
    <ApplicantForm onAddApplicant={handleAddApplicant}/>
     <StudentEdit />
     </>
  );
}

export default App;
