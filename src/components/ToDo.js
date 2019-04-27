import React, { Component, Fragment } from 'react'
import GetInput from './getInput'
import AddTask from './addTask'
import ListTasks from './listTasks'

class ToDo extends Component {

  state = {
    value: null,
    task: []
  }

  setValue = (event) => {
    this.setState({ value: event.target.value })
  }

  addToTask = () => {
    this.setState((state) => {
      return {
        task: [ ...state.task, { title: state.value, is_done: false } ]
      }
    }, () => console.log(this.state.task))

  }

  finishTask = (title) => {
    let tasks = this.state.task
    const i = tasks.findIndex(t => t.title === title)
    tasks[ i ].is_done = !tasks[ i ].is_done
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
      <Fragment>

        <h2 className='alert badge-success'>Please enter your tasks</h2>

        <div className="row">

          <div className="col-sm-4">
            <GetInput
              setValue={ this.setValue }
              placeholder='Your task'
            />
          </div>

          <div className="col-sm-4">
            <AddTask title={ 'Add Task' } click={ this.addToTask }/>
          </div>

        </div>

        <ListTasks delete={ this.deleteTask } finish={ this.finishTask } list={ this.state.task }/>

      </Fragment>
    )
  }
}

export default ToDo