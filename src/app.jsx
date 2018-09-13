import React from 'react';
import Content from './Content.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: (new Date()).toString(),
    };
  }

  render() {
    return (
      <div>
        <div>An App</div>
        <Content now={this.state.now} />
      </div>
    );
  }
}
