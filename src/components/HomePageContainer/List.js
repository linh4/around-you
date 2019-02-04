import React from 'react';

const List = ({news}) => {
  return (
    <div>
      <a href={news.url} target="_blank">
        {news.urlToImage ? <img src={news.urlToImage} alt={news.title}/> : <img src="https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" alt={news.title}/>}
      </a>
      <h3>{news.title}</h3>
      <p>{news.description}</p>
      {news.author}
    </div>
  )
}

export default List;
