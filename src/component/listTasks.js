import React, { Component } from 'react'
import DoneTask from './doneTask'
import DeleteTask from './deleteTask'

export default class ListTasks extends Component {

  doneTask = (item) => {
    if (item.is_done) {
      return (
        <del>
          <li onClick={() => this.finishTask(item.title)}>{item.title}</li>
        </del>
      )
    }

    return <li onClick={() => this.finishTask(item.title)}>{item.title}</li>
  }

  finishTask = (title) => {
    let tasks = this.state.task
    const i = tasks.findIndex( t=> t.title === title)
    tasks[i].is_done = !tasks[i].is_done
    this.setState({ task: tasks })
  }

  deleteTask = (title) => {
    let tasks = this.state.task
    const i = tasks.findIndex(t => t.title === title)
    tasks.splice(i, 1)
    this.setState({ task: tasks })
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.props.list.map((item, index) => (
              <div id="result" key={index}>

                <DoneTask doneItem={this.doneTask(item)}/>

                <DeleteTask text={"delete"} title={"delete"} delete={() => this.deleteTask(item.title)}/>

              </div>

            ))
          }
        </ul>
      </div>
    )
  }
}

