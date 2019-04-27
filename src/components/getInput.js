import React, { Fragment } from 'react'

const GetInput = (props) => {
  return (
    <Fragment>
      <input className='form-control' onKeyUp={ props.setValue } placeholder={ props.placeholder }/>
    </Fragment>
  )
}

export default GetInput