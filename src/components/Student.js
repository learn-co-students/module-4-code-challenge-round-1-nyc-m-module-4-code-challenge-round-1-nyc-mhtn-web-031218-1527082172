import React from 'react'

const Student = ({student, focus}) => {
  const handleClick = () => {
    focus(student)
  }
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.class_year}</td>
      <td>{student.percentage}</td>
      <td>
        <button className="ui button left" onClick={handleClick}>
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student
