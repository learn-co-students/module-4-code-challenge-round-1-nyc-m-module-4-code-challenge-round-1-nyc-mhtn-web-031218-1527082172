import React, { Component } from 'react'
import CourseContainer from './CourseContainer'

class App extends Component {

  state = {
    courseInfo: []
  }

  componentDidMount(){
    fetch('https://bayside-high.herokuapp.com/api/v1/users/98/courses')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        courseInfo: data})
  })
}


  render() {

    return (
      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <h2>Bayside High Grade Tracker</h2>
        </div>
        < CourseContainer courses={this.state.courseInfo}/>
      </div>
    )
  }
}

export default App
