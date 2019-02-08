import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { searchArticle } from '../../store/actions/newsAction'

const SearchArticle = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let value = e.target.article.value
    if (value !== '') {
      props.searchArticle(value)
      props.history.push(`/search/${value}`)
      e.target.article.value = ''
    }
  }

  return (
    <div className="nav-right">
      <form onSubmit={handleSubmit} id="search-form">
        <input type="text" name="article" id="search-bar" placeholder="eg: trump..." />
        <input id="icon" type="image" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
      </form>
    </div>
  )
}

export default withRouter(connect(null, { searchArticle })(SearchArticle))
