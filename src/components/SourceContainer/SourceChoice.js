import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { pickSource } from '../../store/actions/newsAction'

const SourceChoice = (props) => {

  const chooseSource = () => {
    props.pickSource(props.source.id)
    props.history.push(`/sources/${props.source.id}`)
  }

  return (
    <>
      <button className="btn-source" onClick={chooseSource}>{props.source.name}</button>
    </>
  )
}

export default withRouter(connect(null, { pickSource })(SourceChoice))
