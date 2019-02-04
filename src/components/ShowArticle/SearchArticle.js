import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { searchArticle } from '../../store/actions/newsAction'

const SearchArticle = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let value = e.target.article.value
    props.searchArticle(value)
    props.history.push(`/search/${value}`)
    e.target.article.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="article" />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default withRouter(connect(null, { searchArticle })(SearchArticle))
