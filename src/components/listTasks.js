import React, { Component } from 'react'
import DeleteTask from './deleteTask'

export default class ListTasks extends Component {

  doneTask = (item) => {
    if (item.is_done) {
      return (
        <del>
          <li className='list-group-item'>
            <span onClick={ () => this.props.finish(item.title) }>{ item.title }</span>
            <DeleteTask text='delete' title='delete' delete={ () => this.props.delete(item.title) }/>
          </li>
        </del>
      )
    }

    return (
      <li className='list-group-item'>
        <span onClick={ () => this.props.finish(item.title) }>{ item.title }</span>
        <DeleteTask text='delete' title='delete' delete={ () => this.props.delete(item.title) }/>
      </li>
    )
  }

  render () {
    return (
      <div>
        <ul className='list-group mt-5'>
          {
            this.props.list.map((item, index) => (
              <div id="result" key={ index }>

                { this.doneTask(item) }

              </div>
            ))
          }
        </ul>
      </div>
    )
  }
}