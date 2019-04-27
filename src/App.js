import React, { Component } from 'react'
import './App.scss'
import ToDo from './components/ToDo'

export default class App extends Component {

  render () {

    return (
      <div className='container-fluid'>
        <ToDo/>
      </div>
    )
  }

}