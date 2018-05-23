import React, { Component } from "react";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";
import courseList from "../courseList";

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    query: ''
  };

  componentDidMount(){
    fetch('https://bayside-high.herokuapp.com/api/v1/users/98/courses/385')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        students: data.students
      })
  })
}

mainData = (e) => {
   this.setState({
     currentCourse: e.target.value
   })
}



// studentSearch = () => {
//   this.state.students.filter)
// }
// //
// handleSearch = (e) => {
//     this.setState({
//       query: e.target.value
//     })
// }

  render() {
    console.log(this.state.currentCourse)
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          Title: This sucks
        </div>

        <CourseSelector
          courseData={this.props.courses}
          mainData={this.mainData}
          currentCourse={this.state.currentCourse}
        />

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
                value={this.state.query}
                onChange={this.handleSearch}
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

        <StudentsList
          students={this.state.students}
        />
      
      </div>
    );
  }
}

export default CourseContainer;
