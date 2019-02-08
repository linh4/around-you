import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSources } from '../../store/actions/newsAction'
import Choice from './Choice'

const Category = (props) => {

  useEffect(() => {
    props.getSources()
  }, [])

  const renderCategory = () => {
    if (props.sources) {
      const categories = props.sources.map(s => s.category)
      let unique = [...new Set(categories)]
      return unique.map(c => <Choice key={c} category={c} />)
    } else {
      return <div><div className="giphy"><iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg"></a></p></div></div>
    }
  }

  return (
    <div className="category">
      {renderCategory()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sources: state.news.sources
    };
};

export default connect(mapStateToProps, { getSources })(Category)
