import React from 'react';
import './Content.css';

export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
        I am content
        <br />
        {this.props.now}
      </div>
    );
  }
}
