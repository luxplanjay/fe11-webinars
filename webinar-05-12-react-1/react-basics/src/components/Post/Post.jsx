import React from 'react';
import './Post.css';
import userPic from './assets/userpic.jpeg';

console.log(userPic);

class Post extends React.Component {
  render() {
    const { name, text, date } = this.props;
    return (
      <div className="Post">
        <img src={userPic} alt="" className="Post__img" />
        <h3 className="Post__name">{name}</h3>
        <p className="Post__text">{text}</p>
        <span className="Post__date">{JSON.stringify(date)}</span>
      </div>
    );
  }
}

export default Post;
