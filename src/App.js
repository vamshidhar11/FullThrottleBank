import React from 'react';
import './App.css';
import EnterDetails from './enterDetails';
import HistoryList from './historyList';
function App() {
  const [quote, setQuote] = React.useState();
  const [historyList, setHistoryList] = React.useState([]);

  let insertInHistoryArray = false;
  const getHistory = data => {
    setQuote(data);
    console.log(data);
  };
  function saveHistory() {
    console.log('Saving History...');
    if (insertInHistoryArray === true) {
      setHistoryList([...historyList, quote]);
      insertInHistoryArray = false;
    }
  }

  React.useEffect(() => {
    insertInHistoryArray = true;
  }, [quote, insertInHistoryArray]);

  return (
    <div className="header">
      <div className="app-header">
        <h1 className="title">full throttle bank.</h1>
      </div>
      <EnterDetails getHistory={getHistory} />
      <div onClick={saveHistory} className="btn-save">
        {' '}
        <h3>save</h3>{' '}
      </div>
      <div className="app-sidebar">
        {' '}
        <h3>History</h3> <HistoryList historyList={historyList} />
      </div>
    </div>
  );
}

export default App;
