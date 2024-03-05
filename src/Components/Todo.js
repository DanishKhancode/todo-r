//rcc -> react class component
import React, { Component } from 'react'

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      curTask: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      curTask: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.curTask, id: this.state.tasks.length + 1 },
      ],
      // search task empty ho jyga
      curTask: "",
    });
  };

  handleDeleteTasks = (id) => {
    // let narr = [];
    let narr = this.state.tasks.filter((taskObj)=>{
      return taskObj.id != id;
    });
    this.setState({
      tasks: [...narr],
    });
  };

  render() {
    console.log("render method is called");
    return (
      //jsx starts
      // <div>Todo</div>
      <div>
        <input className='input'
          type="text"  placeholder="Add Task"
          value={this.state.curTask}
          onChange={this.handleChange}
        />
        <button className='submit' onClick={this.handleSubmit}>Submit</button>

        {
          // use when need to write JS in jsx
          this.state.tasks.map((taskObj)=> {
            return (
              <li className='task' key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button className='remove' onClick={() => this.handleDeleteTasks(taskObj.id)}>
                  Delete
                </button>
              </li>
            );
          })
        }
      </div>
    );
  }
}
