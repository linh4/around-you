import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopHeadlines } from '../../store'
import List from './List'

const HomePage = (props) => {

  useEffect(() => {
    props.fetchTopHeadlines()
  }, [])

  return (
    <div className="head-lines">
      {props.news ? props.news.map((news, idx) => <List key={idx} news={news}/>) : <div className="giphy"><iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg"></a></p></div>}
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    news: state.news.headlines
    };
};

export default connect(mapStateToProps, { fetchTopHeadlines })(HomePage)
