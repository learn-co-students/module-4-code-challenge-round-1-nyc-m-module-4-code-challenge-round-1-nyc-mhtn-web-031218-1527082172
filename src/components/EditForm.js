import React, {Component} from 'react'

export default class EditForm extends Component {
  state = {
    name: '',
    class_year: '',
    percentage: ''
  }
  componentWillRecieveProps(prevProps){
    if (!(prevProps===this.props)){
      this.setState({
        name: this.props.student.name,
        class_year: this.props.student.class_year,
        percentage: this.props.student.percentage
      })
    }
  }
  handleSubmit = () => {
    fetch(`https://bayside-high.herokuapp.com/api/v1/users/91/students/` + this.props.student.id, {
      method: "PATCH",
      header: {"Content-Type": "application/json"},
      body: JSON.stringify({...this.props.student})
    })
    .then(resp=>resp.json())
    .then( resp =>
      this.props.onSubmit(resp)
    )
  }
  handleChange = (event) => {

    this.setState({
      [event.target.id]: event.target.value
    })
  }
  render(){
    console.log(this.state)
    return (
      <form
        className="ui form center aligned sixteen wide column"
        onSubmit={this.handleSubmit}
      >
    <div className="inline fields">
      <div className="four wide field">
        <input
          id="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
      <div className="four wide field">
        <input
          id="class_year"
          type="number"
          value={this.state.class_year}
          onChange={this.handleChange}
        />
      </div>
      <div className="four wide field">
        <input
          id="percentage"
          type="number"
          value={this.state.percentage}
          onChange={this.handleChange}
        />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </div>
  </form>)}
}
