import React from 'react'

function Student(props) {
  return (
    <div>
          <h2>Student Details </h2>
          {props.std.map((i) => (
          
          <div >
          <p>Name: {i.name}</p>
          <p>Age : {i.Age}</p>
          <p>Enrollment_No:  {i.Enr_no}</p>
          <hr />

        </div>
      ))}

    </div>
  )
}

export default Student;
