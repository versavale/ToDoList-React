import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
this.state = {
  userInput: '',
  toDoList: []
}
this.handleSubmit = this.handleSubmit.bind(this);
this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(){
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e){
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(i => <li>{i}</li>);
    return (
      <div className="App">
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          placeholder="Separate items with commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My To Do List:</h1>
          <ul>
            {items}
          </ul>
      </div>
    );
  }
}

export default App;
