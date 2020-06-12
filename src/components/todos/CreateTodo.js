import React, { Component } from 'react'
import { connect } from 'react-redux'
 
class CreateTodo extends Component {

  state = {
    input: ""
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.input}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (obj) => dispatch({ type: 'ADD_TODO', payload: obj })
  }
}
 
export default connect(null, mapDispatchToProps)(CreateTodo);
