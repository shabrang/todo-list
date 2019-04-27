import React, { Fragment } from 'react'

export default (props) => {
  return (
    <Fragment>
      <button className='btn btn-danger ml-5' title={ props.title } onClick={ props.delete }>{ props.text }</button>
    </Fragment>
  )
}