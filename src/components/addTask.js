import React, { Component, Fragment } from 'react'

export default class AddTask extends Component {
  render () {
    return (
      <Fragment>
        <button className='btn btn-primary' onClick={ this.props.click }>
          { this.props.title }
        </button>
      </Fragment>
    )
  }
}
