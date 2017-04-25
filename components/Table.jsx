import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className = "col-md-6">
          <h1> Table Area </h1>
        </div>
      </div>
    );
  }
}

export default Table;