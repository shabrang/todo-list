import React, { Component } from 'react'

export default class DoneTask extends Component {
  render () {
    return (
      <div>
        {this.props.doneItem(item)}
      </div>
    )
  }
}

