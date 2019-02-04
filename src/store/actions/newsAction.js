import axios from 'axios'
import { API_KEY } from '../../keys'

const baseURL = 'https://newsapi.org/v2'

const headLinesAction = (sources) => ({type: 'GET_HEADLINES', sources})

export const fetchTopHeadlines = () => {
  const URL = `${baseURL}/top-headlines?country=us&apiKey=${API_KEY}`
  return dispatch => {
    return axios.get(URL)
    .then(data => dispatch(headLinesAction(data.data.articles)))
    .catch(err => console.log(err))
  }
}

const sourceAction = (sources) => ({type: "GET_SOURCES", sources})

export const getSources = () => {
  const URL = `${baseURL}/sources?apiKey=${API_KEY}`
  return dispatch => {
    return axios.get(URL)
    .then(data => dispatch(sourceAction(data.data.sources)))
    .catch(err => console.log(err))
  }
}

const pickCategory = (articles) => ({type: 'PICK_OPTIONS', articles})

export const getCategory = (category) => {
  const URL = `${baseURL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  return dispatch => {
    return axios.get(URL)
    .then(data => dispatch(pickCategory(data.data.articles)))
    .catch(err => console.log(err))
  }
}

export const pickSource = (source) => {
  const URL = `${baseURL}/top-headlines?sources=${source}&apiKey=${API_KEY}`
  return dispatch => {
    return axios.get(URL)
    .then(data => dispatch(pickCategory(data.data.articles)))
    .catch(err => console.log(err))
  }
}

const getSearchArticle = (articles) => ({type: 'SEARCH_ARTICLE', articles})

export const searchArticle = (title) => {
  const URL = `${baseURL}/top-headlines?language=en&q=${title}&apiKey=${API_KEY}`
  return dispatch => {
    return axios.get(URL)
    .then(data => dispatch(getSearchArticle(data.data.articles)))
    .catch(err => console.log(err))
  }
}
