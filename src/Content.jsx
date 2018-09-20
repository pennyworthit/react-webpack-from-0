import React from 'react';
import PropTypes from 'prop-types';
// import './Content.css';
// import ContentStyles from './Content.css';
import ContentStyles from './Content2.scss';

const Content = (props) => {
  const { now } = props;
  return (
    <div className={ContentStyles.content2}>
      I am content
      <br />
      {now}
    </div>
  );
};

Content.propTypes = {
  now: PropTypes.string,
};

Content.defaultProps = {
  now: '',
};

export default Content;
