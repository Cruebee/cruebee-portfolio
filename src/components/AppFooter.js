import React from 'react';

import logo from '../assets/crue_logo.svg';

export default class AppFooter extends React.Component {
  render() {
    return (
      <footer>
        <img src={logo} alt="Crue's Logo" className="App-logo" />
      </footer>
    );
  }
}
