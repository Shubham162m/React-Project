import React from 'react'
import Student from './Student';
import Employee from './Employee';

function UserData() {
        let students = [
                {name : "Shubham" ,Age : 22 , Enr_no : 24162582010} ,
                {name : "Aryan" ,Age : 23 , Enr_no : 24162582016}
        ];

        let Employees =
        [
                {name:"Alice" , Age : 30 ,Location : "Gujarat ,Palanpur"},
                {name:"Bob " , Age : 25 ,Location : "Gujarat ,Ahmedabad"}
        ]
        
  return (
    <div>
         <Student std = {students}/>
         <Employee Emp = {Employees}/>
    </div>
  )
}

export default UserData ;
