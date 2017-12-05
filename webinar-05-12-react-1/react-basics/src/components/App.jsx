import React from 'react';
import Header from './Header';
import Post from './Post/Post';
import post from '../post';

console.log(post);

class App extends React.Component {
  render() {
    return (
        <div id="App">
        <Header text="Social book" />
        <Post
          name={post[1].name}
          date={post[1].date}
          text={post[1].text}
        />
        <Post
          name={post[0].name}
          date={post[0].date}
          text={post[0].text}
        />
      </div>
    );
  }
}

export default App;
