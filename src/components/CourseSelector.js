import React from "react";

const CourseSelector = (props) => {
  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" value={props.currentCourse} onChange={props.mainData}>
        {props.courseData.map((props, i) => {
          return (
            <option key={i} className="item" data-value={props.id}>
              {props.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CourseSelector;
