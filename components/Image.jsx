import React from 'react';
import ReactDOM from 'react-dom';


class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {image: '../images/mountains.png'};
  }

  render() {
    return (
      <div className="col-md-6">
        <h3>Image area here</h3>
        <img src={this.state.image} />
      </div>
    );
  }
}

export default Image;