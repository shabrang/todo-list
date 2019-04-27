//import 'scss/bootstrap/_init.scss'
import React, { Component } from 'react'
//import Counter from './components/Counter/Counter'

export default class App extends Component {
  state = {
    value: null,
    task: [],
  }

  setValue = (event) => {
    this.setState({ value: event.target.value })
  }

  addToTask = () => {
    this.setState((state) => {
      return { task: [ ...state.task, { title: state.value, is_done: false } ] }
    })

    /*this.setState((state) => {
      state.task.push(this.state.value)
    })*/
  }

  deleteTask = (title) => {
    let tasks = this.state.task
    const i = tasks.findIndex(task => task.title === title)
    tasks.splice(i, 1)
    this.setState({ task: tasks })
  }

  finishTask = (title) => {
    let tasks = this.state.task
    const i = tasks.findIndex(task => task.title === title)
    tasks[ i ].is_done = !tasks[ i ].is_done
    this.setState({ task: tasks })
  }

  handleTask = (item) => {
    if (item.is_done) {
      return (
        <del>
          <li onClick={ () => this.finishTask(item.title) }>{ item.title }</li>
        </del>
      )
    }

    return <li onClick={ () => this.finishTask(item.title) }>{ item.title }</li>
  }

  render () {
    return (
      <div>
        <h2>please enter your task :</h2>
        <input type="text" onKeyUp={ this.setValue } placeholder="enter your task"/>
        <button onClick={ this.addToTask }>add task</button>
        <ul>
          {
            this.state.task.map((item, index) => (
              <div id="result" key={ index }>
                { this.handleTask(item) }
                <button title='delete' onClick={ () => this.deleteTask(item.title) }>delete</button>
              </div>

            ))
          }
        </ul>
      </div>
    )
  }

}