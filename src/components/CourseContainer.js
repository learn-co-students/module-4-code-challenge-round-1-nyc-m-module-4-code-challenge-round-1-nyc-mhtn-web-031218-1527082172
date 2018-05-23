import React, { Component } from "react";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";
import courseList from "../courseList";
import EditForm from "./EditForm"

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {}
  };
  handleCourseChange = (course) => {
    this.setState({
      currentCourse: course
    })
    this.updateStudentState(course.id)
  }
  updateStudentState = (courseId) => {
    fetch(`https://bayside-high.herokuapp.com/api/v1/users/91/courses/`+ courseId)
    .then(resp=>resp.json())
    .then(resp=>{
      this.setState({
        students: resp
      })
    })
  }
  updateCurrentStudent = (student) => {
    this.setState({
      currentStudent: student
    })
  }
  onSubmit = (editstudent) => {
    let index = this.state.students.indexOf(student=>student.id===editstudent.id)
    this.setState({
      students: [...this.state.students.slice(0,index), editstudent, ...this.state.students.slice(index+1)]
    })
  }
  render() {
    console.log(this.state.students)
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
        </div>

        <CourseSelector handleSelect={this.handleCourseChange}/>

        <EditForm student={this.state.currentStudent} onSubmit={this.onSubmit}/>


        <StudentsList students={this.state.students.students} focusStudent={this.updateCurrentStudent}/>
      </div>
    );
  }
}

export default CourseContainer;
