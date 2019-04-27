//import 'scss/bootstrap/_init.scss'
import React, { Component, createRef } from 'react'
import './App.scss'
import GetInput from './component/getInput'
import AddTask from './component/addTask'
import ListTasks from './component/listTasks'

export default class App extends Component {

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
        task: [...state.task, { title: state.value, is_done: false },]
      }
    }, () => console.log(this.state.task))

  }

  render () {

    return (
      <div>

        <GetInput
          set={this.setValue}
          text={'please enter your tasks'}
          hText={'your Task'}
        />

        <AddTask title={'add task'} add={this.addToTask}/>

        <ListTasks list={this.state.task}/>


      </div>
    )
  }

}