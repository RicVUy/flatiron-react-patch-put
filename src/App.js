import { useEffect, useState } from "react";
//import EditFormSection from "./components/EditFormSection/EditFormSection";
//import StudentDetails from "./components/StudentDetails/StudentDetails";
import './App.css';
import Header from "./components/Header/Header";
import StudentContainer from "./components/StudentDetails/StudentContainer";
import StudentRecCont from "./components/StudentRecords/StudentRecCont";
function App() {



  return (
    <>
    <div className="App">
     <Header/>
     </div>
     <main className="main-section">
      <p className = "student-details">
     <StudentContainer/>
     </p>
     </main>
     <StudentRecCont/>
     </>
  );
}

export default App;
