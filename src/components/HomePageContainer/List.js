import React from 'react';

const List = ({news}) => {

  return (
    <>
      <hr/>
      <div className="post">
        <a href={news.url} target="_blank">
          <div className="news-image">
            {news.urlToImage ? <img src={news.urlToImage} alt={news.title}/> : <img src="https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" alt={news.title}/>}
          </div>
          <div className="content">
            {news.title ? <h3>{news.title}</h3> : <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</h3>}
            {news.description ? <p>{news.description}</p> : <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,</p>}
          </div>
        </a>
      </div>
    </>
  )
}

export default List;
