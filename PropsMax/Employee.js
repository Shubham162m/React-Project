import React from 'react'

function Employee(props) {
  return (
    <div>
          <h2>Employees Details </h2>
         
          {props.Emp.map((i) => (
          <div >
         
          <p>Name: {i.name}</p>
          <p>Age: {i.Age}</p>
          <p>Location: {i.Location}</p>
          <hr />
          
        </div>
      ))}

    </div>  )
}

export default Employee;