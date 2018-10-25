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
    const itemsArray = this.state.userInput.split(', ');
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
    const countItems = this.state.toDoList.length;
    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <div className="wrapper">
        <div className="col1">
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          placeholder="Add your items here, separated by commas" /><br />
        < div className="button-wrapper">
        <button className="create" onClick={this.handleSubmit}>Create List</button>
        </div>
        </div>
        <div className="col2">
        <div className="todoarea">
          <ul>
            {items}
          </ul>
        </div>
        <div className="action-wrapper">
        <div className="action">
        <p>To-Do: {countItems}</p>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
