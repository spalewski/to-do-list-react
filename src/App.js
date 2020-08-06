import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Title from './Components/Title/Title'
import List from './Components/List/List'
import Entry from './Components/Entry/Entry'

function App() {
  return (
    <div className="App">
      <Title />
      <Entry />
      <List />
    </div>
  );
}

export default App;
