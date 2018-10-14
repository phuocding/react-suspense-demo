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
