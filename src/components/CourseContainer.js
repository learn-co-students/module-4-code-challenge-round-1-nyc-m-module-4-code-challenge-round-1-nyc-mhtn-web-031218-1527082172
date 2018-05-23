import React, { Component } from "react";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";
import courseList from "../courseList";

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
  }
  render() {
    console.log(this.state.currentCourse)
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
        </div>

        <CourseSelector handleSelect={this.handleCourseChange}/>

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
