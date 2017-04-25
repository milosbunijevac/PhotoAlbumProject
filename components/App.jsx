import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table.jsx';
import Image from './Image.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Photo Library App </h1>
        <Table />
        <Image />
      </div>
    );
  }
}

export default App;