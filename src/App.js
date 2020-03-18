import React from 'react';
import './App.css';

import RepoSearch from "./components/reposearch/RepoSearch"

import store from "./store/index";

function App() {
  return (
    <div className="App">
      <RepoSearch store={store}/>
    </div>
  );
}

export default App;
