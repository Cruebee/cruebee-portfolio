import React from 'react';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import AppNavbar from './components/AppNavbar';

export default class App extends React.Component {
  render() {
    return (
      <main id="pageTop" className="App">
        <header className="App-header">
          <nav>
            <AppNavbar />
          </nav>
          <Home />
        </header>
        <section>
          <div id="aboutMe">
            <AboutMe />
          </div>
        </section>
        <div id="projects">
          <Projects />
        </div>
        <div id="contactMe">
          <ContactMe />
        </div>
      </main>
    );
  }
}
