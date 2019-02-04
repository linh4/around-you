import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCategory } from '../../store/actions/newsAction'


const Choice = (props) => {

  const pickCategory = () => {
    props.getCategory(props.category)
    props.history.push(`/category/${props.category}`)
  }

  return (
    <div onClick={pickCategory}>
      {props.category}
    </div>
  )
}

export default withRouter(connect(null, { getCategory })(Choice))
