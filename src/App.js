import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MovieProvider } from './context/movie-context';
import MovieList from './pages//movie-list'
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const NotFound = () => {
  return (
    <div>Page not found</div>
  )
}

const Extra = () => {
  return (
    <div>Testing Page</div>
  )
}

function App() {
    return (
      <MovieProvider>
         <Layout>
         <Router>
          <Switch>
            <Route path="/" exact component={MovieList} />
            <Route  path="/test" component={Extra} />
            <Route component={NotFound} />
          </Switch>
        </Router>
       </Layout>
      </MovieProvider>
    );
}

export default App;