import React from 'react'

const Student = (props) => {
  console.log(props)
  return (
    {props.students.map((student) => {
      return(
        <tr>
          <td>{student.name}</td>
          <td>{student.grade}</td>
          <td>{student.coursePercent}</td>
          <td>
            <button className="ui button left">
              Edit
            </button>
          </td>
        </tr>
      )
     })}


  )
}

export default Student
