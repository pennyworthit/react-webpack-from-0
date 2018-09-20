import React from 'react';
import Content from './Content';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: (new Date()).toString(),
    };
  }

  render() {
    const { now } = this.state;
    return (
      <div>
        <div>An App</div>
        <Content now={now} />
      </div>
    );
  }
}
