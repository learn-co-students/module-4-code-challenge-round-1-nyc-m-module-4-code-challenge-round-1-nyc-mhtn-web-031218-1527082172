import React from "react";
import courseList from "../courseList";

const CourseSelector = (props) => {
  console.log(props)


  return (
    <div className="sixteen wide column">
      <select onChange={props.handleChange} className="ui dropdown">
        {props.courses.map((course, i) => {
          return (
            <option key={i} className="item" data-value={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CourseSelector;
