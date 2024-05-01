
//import EditFormSection from "./components/EditFormSection/EditFormSection";
//import StudentDetails from "./components/StudentDetails/StudentDetails";
import './App.css';
import Header from "./components/Header/Header";
import StudentContainer from "./components/StudentDetails/StudentContainer";
import StudentApplicant from "./components/StudentRecords/StudentApplicant";
import QuestionCard from "./components/Questions/QuestionCard";
import StudentEdit from "./components/EditFormSection/StudentEdit";
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
     <StudentApplicant/>
     <QuestionCard/>
    
     <StudentEdit />
     </>
  );
}

export default App;
