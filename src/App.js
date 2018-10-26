import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
this.state = {
  userInput: '',
  toDoList: [],
  doneItems: 0
}
this.handleSubmit = this.handleSubmit.bind(this);
this.handleChange = this.handleChange.bind(this);
this.clearAll = this.clearAll.bind(this);
this.checkboxes = this.checkboxes.bind(this);
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
  clearAll(){
    this.setState({
      userInput: '',
      toDoList: [],
      doneItems: 0
    })
  }
  checkboxes(){
    let inputElems = document.getElementsByTagName("input"),
    count = 0;
      for (var i = 0; i < inputElems.length; i++) {       
        if (inputElems[i].checked === true){
          count++;
          this.setState({
            doneItems: count
          });
        }
      }
    }

  render() {
    const items = this.state.toDoList.map(i => <div className="checkbox"><input type="checkbox" id={this.state.toDoList.indexOf(i)} onClick={this.checkboxes} /><label htmlFor={this.state.toDoList.indexOf(i)}>{i}</label></div>);
    const doneCount = this.state.doneItems;
    const countItems = this.state.toDoList.length - doneCount;
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
        <button className="reset" onClick={this.clearAll}>Clear List</button>
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
          <div className="action completed">
            <p>Completed: {doneCount}</p>
          </div>
          <div className="action todo">
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
