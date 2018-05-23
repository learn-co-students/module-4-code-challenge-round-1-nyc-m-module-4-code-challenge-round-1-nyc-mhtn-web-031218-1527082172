import React, { Component } from "react";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";
import courseList from "../courseList";

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: [],
    currentStudent: {}
  };


      componentDidMount(){
        fetch("https://bayside-high.herokuapp.com/api/v1/users/86/courses")
        .then(response => {
          return response.json()
        }).then(res => {
            console.log(res)
            this.setState({currentCourse: res })

        })
      }




  render() {

    const course = this.state.currentCourse.map((course) => {course.name})


    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
            {course}
          Course Title
        </div>

        <CourseSelector  currentCourse= {this.state.currentCourse}/>

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

        <StudentsList />
      </div>
    );
  }
}

export default CourseContainer;
