import React from 'react'

function ProfileCard(props){
    return <div className='rightDiv'>
        <table>
            <tr>
                <td rowSpan={7}><img className="profile" src={require('../assets/'+props.student.profilePic)} alt="Profile"/></td>
                <td>ID: {props.student.studentId}</td>
            </tr>
            <tr>
                <td>Full Name: {props.student.firstName + " " + props.student.lastName}</td>
            </tr>
            <tr>
                <td>Age: {props.student.age}</td>
            </tr>
            <tr>
                <td>Course: {props.student.course}</td>
            </tr>
            <tr>
                <td>Gender: {props.student.gender}</td>
            </tr>
            <tr>
                <td>Address: {props.student.address.city + "," + props.student.address.country}</td>
            </tr>
            <tr>
                <td>Skills: {props.student.skills + ""}</td>
            </tr>
            
        </table>
    </div>
}

export default ProfileCard;