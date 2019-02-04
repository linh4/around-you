import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { pickSource } from '../../store/actions/newsAction'

const SourceChoice = (props) => {

  const chooseSource = () => {
    props.pickSource(props.source.id)
    props.history.push(`/source/${props.source.id}`)
  }

  return (
    <div>
      <p onClick={chooseSource}>{props.source.name}</p>
    </div>
  )
}

export default withRouter(connect(null, { pickSource })(SourceChoice))
