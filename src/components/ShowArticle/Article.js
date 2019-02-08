import React from 'react';
import { connect } from 'react-redux'

const Article = (props) => {

  const renderArticles = () => {
    if (props.articles) {
      if (props.articles.length === 0) {
        return <div className="no-result"><img src="/images/no-result.png" alt="no result found"/></div>
      }
      return props.articles.map(a => (
        <>
          <hr/>
          <div key={a.title} className="post">
            <a href={a.url} target="_blank">
              <div className="news-image">
                {a.urlToImage ? <img src={a.urlToImage} alt={a.title}/> : <img src="/images/err.jpg" alt={a.title}/>}
              </div>
              <div className="content">
                {a.title ? <h3>{a.title}</h3> : <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</h3>}
                {a.description ? <p>{a.description}</p> : <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,</p>}
              </div>
            </a>
          </div>
        </>
      ))
    } else {
      return <div class="giphy"><iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg"></a></p></div>
    }
  }

  return (
    <div className="head-lines">
      {renderArticles()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    articles: state.news.articles
    };
};

export default connect(mapStateToProps)(Article)
