import React from 'react';
import './App.css';
import './components/ShowArticle/Article.css'
import './components/CategoryContainer/Category.css'
import './components/SourceContainer/Source.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePageContainer/HomePage'
import Navbar from './components/Navbar'
import Category from './components/CategoryContainer/Category'
import Source from './components/SourceContainer/Source'
import Article from './components/ShowArticle/Article'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/category/:category" render={routeProps => <Article {...routeProps} /> } />
        <Route exact path="/sources" component={Source} />
        <Route exact path="/sources/:source" render={routeProps => <Article {...routeProps} /> } />
        <Route exact path="/search/:search" render={routeProps => <Article {...routeProps} /> } />
      </Switch>
    </div>
  )
}

export default App;
