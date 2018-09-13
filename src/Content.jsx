import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <div>
        I am content
        <br />
        {this.props.now}
      </div>
    );
  }
}
