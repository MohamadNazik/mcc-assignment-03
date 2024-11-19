import { useState } from 'react';
import './App.css';
import StudentTable from './components/StudentTable';
import students from './data/StudentsDb'
import ProfileCard from './components/ProfileCard';

function App() {
  const [currentStudent, setCurrentStudent] = useState(students[0]);
  const [fontSize, setFontSize] = useState(16);
  const receiveStudent = (student)=>{
    setCurrentStudent(student)
  }

  return (
    <div style={{fontSize: `${fontSize}px`}}>
      <h1 id='heading'>Student Information Portal</h1>
      <hr/>
      <div className='buttons-container'>
        <p>Font Size:</p>
        <button onClick={()=>setFontSize(16)}>S</button>
        <button onClick={()=>setFontSize(20)}>M</button>
        <button onClick={()=>setFontSize(24)}>L</button>
      </div>
      <hr/>
      
      <div className='outerDiv'>

        <div className='leftDiv'>
          <StudentTable students={students} setStudent={receiveStudent}/>
        </div>

        <ProfileCard student={currentStudent}/>
      
      </div>
      
    </div>
  );
}

export default App;
