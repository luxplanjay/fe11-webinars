import React from 'react';

// Class component
// export default class LoginForm extends React.Component {
//   _handleFormSubmit = evt => {
//     evt.preventDefault();

//     const userData = {
//       login: this.loginInput.value,
//       pass: this.passInput.value
//     };

//     console.log(JSON.stringify(userData));

//     this.form.reset();
//   };

//   render() {
//     return (
//       <form onSubmit={this._handleFormSubmit} ref={node => (this.form = node)}>
//         <input
//           type="text"
//           ref={node => {
//             this.loginInput = node;
//           }}
//         />
//         <input
//           type="password"
//           ref={node => {
//             this.passInput = node;
//           }}
//         />
//         <button type="submit">login</button>
//       </form>
//     );
//   }
// }

// Functional component
const LoginForm = props => {
  let form = null;
  let loginInput = null;
  let passInput = null;

  const _handleFormSubmit = evt => {
    evt.preventDefault();

    const userData = {
      login: loginInput.value,
      pass: passInput.value
    };

    console.log(JSON.stringify(userData));

    form.reset();
  };

  return (
    <form onSubmit={_handleFormSubmit} ref={node => (form = node)}>
      <input
        type="text"
        ref={node => {
          loginInput = node;
        }}
      />
      <input
        type="password"
        ref={node => {
          passInput = node;
        }}
      />
      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
