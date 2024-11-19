import { useState } from 'react';
import './App.css';
import StudentTable from './components/StudentTable';
import students from './data/StudentsDb'
import ProfileCard from './components/ProfileCard';

function App() {
  const [currentStudent, setCurrentStudent] = useState({});
  const receiveStudent = (student)=>{
    setCurrentStudent(student)
  }
  return (
    <div>
      <h1 id='heading'>Student Information Portal</h1>
      <hr/>
      <div className='buttons-container'>
        <p>Font Size:</p>
        <button>S</button>
        <button>M</button>
        <button>L</button>
      </div>
      <hr/>
      
      <div className='outerDiv'>

        <div className='leftDiv'>
          <StudentTable students={students} setStudent={receiveStudent}/>
        </div>
        <ProfileCard/>

      </div>
      
    </div>
  );
}

export default App;
