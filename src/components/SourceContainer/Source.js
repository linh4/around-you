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
      const sources = props.sources.filter(s => s.country === 'us' && s.language === 'en')
      return sources.map(s => <SourceChoice key={s.id} source={s} />)
    } else {
      return <div><div className="giphy"><iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg"></a></p></div></div>
    }
  }

  return (
    <div className="source-box">
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
