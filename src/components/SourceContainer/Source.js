import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSources } from '../../store/actions/newsAction'
import SourceChoice from './SourceChoice'

const Source = (props) => {

  useEffect(() => {
    props.getSources()
  }, [])

  const renderSources = () => {
    if (props.sources) {
      const sources = props.sources.filter(s => s.country === 'us')
      return sources.map(s => <SourceChoice key={s.id} source={s} />)
    } else {
      return <div>Loading</div>
    }
  }

  return (
    <div>
      <h3>hi</h3>
      {renderSources()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sources: state.news.sources
    };
};

export default connect(mapStateToProps, { getSources })(Source)