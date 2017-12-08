import React from 'react';
import Header from 'components/Header';
import Post from 'components/Post';
import Logo from 'components/Logo';
import posts from 'fakeDatabase';
import './App.css';

// const listItems = {
//   '001': {
//     id: '001',
//     text: 'qweqwe'
//   },
//   '002': {
//     id: '002',
//     text: 'zxczc'
//   },
//   '003': {
//     id: '003',
//     text: 'zxczc'
//   }
// };

// console.log(
//   Object.keys(x).map(key => console.log(x[key]))
// );

class App extends React.Component {
  render() {
    // const items = posts.map(post => <Post {...post} />);

    return (
      <div className="App">
        <Header text="Socialbook">
          <Logo />
        </Header>
        {posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    );
  }
}

export default App;
