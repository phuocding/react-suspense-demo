import React, { Component } from 'react';
import { createResource } from 'simple-cache-provider';
import { withCache } from './components/withCache';
import logo from './logo.svg';
import './App.css';

const sleep = ms => new Promise(r => setTimeout(() => r(), ms));

const readShows = createResource(async function fetchNews() {
  await sleep(3000);
  const res = await fetch(`http://api.tvmaze.com/search/shows?q=suits`);
  return await res.json();
});

const Movies = withCache( (props) => {

  return (
    <React.Fragment>
      <div className="column is-4">
        <div className="movie">
          <div className="movie__left">
            <img src />
          </div>
          <div className="movie__right">
            <div className="movie__right__title">Name: </div>
            <div className="movie__right__subtitle">Score: </div>
            <div className="movie__right__subtitle">Status: </div>
            <div className="movie__right__subtitle">Network: </div>
            <a href target="_blank" className="movie__right__subtitle">Link</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
