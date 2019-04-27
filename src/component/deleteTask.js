import React, { Component } from 'react'

export default class DeleteTask extends Component {
  render () {
    return (
      <div>
        <button title={this.props.title} onClick={this.props.delete}>{this.props.text}</button>
      </div>
    )
  }
}
