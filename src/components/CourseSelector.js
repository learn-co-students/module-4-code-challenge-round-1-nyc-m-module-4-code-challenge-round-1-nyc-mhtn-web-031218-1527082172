import React, {Component} from "react";
import courseList from "../courseList";

export default class CourseSelector extends Component {
  state = {
    courses:[]
  }
  componentDidMount(){
    fetch(`https://bayside-high.herokuapp.com/api/v1/users/91/courses`)
    .then(resp=>resp.json()).then( resp => {
      this.setState({
        courses: [...this.state.courses, ...resp]
      })
    })
  }
  handleSelect = (event) => {
    console.log(this.props)
    let course = this.state.courses.filter(course => course.name === event.target.value)
    this.props.handleSelect(...course)
  }
  render(){
    return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={this.handleSelect}>
        {this.state.courses.map((course, i) => {
          return (
            <option key={i} className="item" data-value={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
    </div>
  )}
};
