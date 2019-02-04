import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopHeadlines } from '../../store'
import List from './List'

const HomePage = (props) => {

  useEffect(() => {
    props.fetchTopHeadlines()
  }, [])

  return (
    <div>
      {props.news ? props.news.map((news, idx) => <List key={idx} news={news}/>) : <div>Loading</div>}
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    news: state.news.headlines
    };
};

export default connect(mapStateToProps, { fetchTopHeadlines })(HomePage)
