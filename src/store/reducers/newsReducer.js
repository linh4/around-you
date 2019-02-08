const initialState = {
  headlines: null,
  sources: null,
  articles: null
}

const newsReducer = (state = initialState, action) => {

  switch(action.type){

    case "GET_HEADLINES":
    console.log(action.sources)
      return {...state, headlines: action.sources}

    case "GET_SOURCES":
      return {...state, sources: action.sources};

    case "PICK_OPTIONS":
      return {...state, articles: action.articles}

    case "SEARCH_ARTICLE":
      return {...state, articles: action.articles}

    default:
    return state
  }
}

export default newsReducer
