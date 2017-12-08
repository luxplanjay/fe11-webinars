import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';
import userPic from './assets/default-userpic.png';

class Post extends React.Component {
  render() {
    const { name, text, date, liked } = this.props;

    const postCls = classNames({
      Post: true,
      'Post--liked': liked
    });

    return (
      <div className={postCls}>
        <img src={userPic} alt="" className="Post__img" />
        <div>
          <p className="Post__author">Posted by {name}</p>
          <p className="Post__text">{text}</p>
          <span className="Post__date">{date.toDateString()}</span>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.shape().isRequired,
  liked: PropTypes.bool.isRequired
};

export default Post;
