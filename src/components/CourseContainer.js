import React, { Component } from "react";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";
import courseList from "../courseList";

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: [],
    courses: [],
    currentStudent: {}
  };



      componentDidMount(){
        fetch("https://bayside-high.herokuapp.com/api/v1/users/86/courses")
        .then(response => {
          return response.json()
        }).then(res => {
            console.log(res)
            this.setState({courses: res })

        })
      }



      handleChange = (event) => {

        this.setState({
          currentCourse: event.target.value
        })
      }

      // getStudents = (this.currentCourse.id) => {
      //     //here we need to get the students for the current matching course. fetch the students to the cooresponding course
      //   if(this.state.currentCourse){
      //     componentDidMount(){
      //       fetch("https://bayside-high.herokuapp.com/api/v1/users/86/courses/{this.state.currentCourse.id}")
      //       .then(response => {
      //         return response.json()
      //       }).then(res => {
      //           console.log(res)
      //           this.setState({students: res })
      //
      //       })
      //     }
      //   }
      // }




  render() {

    const course = this.state.courses.map((course) => {course.name})


    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
            {this.state.currentCourse}
        </div>

        <CourseSelector  courses= {this.state.courses} handleChange = {this.handleChange}/>

        {/* Edit Form */}
        <form
          className="ui form center aligned sixteen wide column"
          onSubmit={""}
        >
          <div className="inline fields">
            <div className="four wide field">
              <input
                id="name"
                type="text"
                value={""}
                onChange={"your code here"}
              />
            </div>
            <div className="four wide field">
              <input
                id="class_year"
                type="number"
                value={""}
                onChange={"your code here"}
              />
            </div>
            <div className="four wide field">
              <input
                id="percentage"
                type="number"
                value={""}
                onChange={"your code here"}
              />
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </div>
        </form>

        <StudentsList students= {this.state.students}/>
      </div>
    );
  }
}

export default CourseContainer;
