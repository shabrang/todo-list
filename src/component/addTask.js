import React, { Component } from 'react'

export default class AddTask extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.add}>{this.props.title}</button>
      </div>
    )
  }
}
