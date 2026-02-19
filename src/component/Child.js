import React from 'react'
import Parent from './Parent' ;

let students = [
        {name : "Shubham", age : 22, course : "MCA"},
        {name : "Satyarth", age : 21, course : "MCA"},
        {name : "Shivam", age : 22, course : "MCA"},
        {name : "Satyarth", age : 21, course : "MCA"},
]


function Child() {
  return (
        <div>
                {
                        students.map((e, i)=>{
                                return <Parent std={e} key={i}/>
                        })
                }
        </div>
  )
}

export default Child ;