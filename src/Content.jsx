import React from 'react';
// import './Content.css';
// import ContentStyles from './Content.css';
import ContentStyles from './Content2.scss';

export default class Content extends React.Component {
  render() {
    return (
      <div className={ContentStyles.content2}>
        I am content
        <br />
        {this.props.now}
      </div>
    );
  }
}
