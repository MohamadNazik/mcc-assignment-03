import React from 'react'

function StudentTable(props){
    return <table border={1}>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course</th>
            <th>Country</th>
            <th>Profile</th>
        </tr>
        {props.students.map((student)=>(
            <tr key={student.studentId}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.course}</td>
                <td>{student.address.country}</td>
                <td><button onClick={()=>props.setStudent(student)}>View</button></td>
            </tr>
            )
        )}
    </table>
}

export default StudentTable;