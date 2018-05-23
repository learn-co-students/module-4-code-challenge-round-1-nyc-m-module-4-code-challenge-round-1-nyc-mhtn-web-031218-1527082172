import React from "react";
import Student from "./Student";

const StudentsList = ({students, focusStudent}) => {
  console.log(students,focusStudent)
  const studentMap = () => {
    return students.map(student=>{
      return <Student student={student} focus={focusStudent}/>
    })
  }
  return (
    <table className="ui celled striped padded">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Student Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Student Grade</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Course Percentage</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Edit</h3>
          </th>
        </tr>

        {students ? studentMap() : null}
      </tbody>
    </table>
  );
};

export default StudentsList;
