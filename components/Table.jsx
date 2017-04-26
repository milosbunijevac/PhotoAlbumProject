import React from 'react';
import ReactDOM from 'react-dom';
import IndivPhotos from './IndivPhotos.jsx';

class Table extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className = "col-md-6">
          <h3> Photo List </h3>
            <div className="panel panel-default">
              <div className="panel-heading">Panel Heading</div>
              <IndivPhotos />
            </div>
        </div>
      </div>
    );
  }
}

export default Table;