import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import AppNavbar from './components/AppNavbar';



export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <nav><AppNavbar /></nav>
        <header className="App-header">
          <AboutMe />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <div>
          <Projects />
        </div>
        <div>
          <ContactMe />
        </div>
      </div>
    );
  }
}

