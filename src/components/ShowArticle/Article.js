import React from 'react';
import { connect } from 'react-redux'

const Article = (props) => {

  const renderArticles = () => {
    console.log(props.articles)
    if (props.articles) {
      // debugger
      if (props.articles.length === 0) {
        return <div>No Result Found</div>
      }
      return props.articles.map(a => (
        <div key={a.title}>
          <a href={a.url} target="_blank">
            {a.urlToImage ? <img src={a.urlToImage} alt={a.title}/> : <img src="https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" alt={a.title}/>}
          </a>
          <h3>{a.title}</h3>
          <p>{a.description}</p>
          {a.author}
        </div>
      ))
    } else {
      return <div>Loading</div>
    }
  }

  return (
    <div>
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
