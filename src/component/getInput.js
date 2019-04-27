import React, { Component } from 'react'

export default class GetInput extends Component {
  render () {

    return (
      <div>
        <h2 >{this.props.hText}</h2>
        <input onKeyUp={this.props.set} placeholder={this.props.text} ref={this.props.ref}/>
      </div>
    )
  }
}
