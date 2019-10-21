import React from 'react';
import './App.css';
import EnterDetails from './enterDetails';

function App() {
  // 'https://ftl-frontend-test.herokuapp.com/interest?amount=600&numMonths=20'
  return (
    <div className="header">
      <div className="app-header">
        <h1 className="title">full throttle bank.</h1>
      </div>
      <EnterDetails />
    </div>
  );
}

export default App;
