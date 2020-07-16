import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import GitHub from '../assets/github_icon.svg';
import linkedIn from '../assets/linkedin_icon.svg';
import instagram from '../assets/instagram_icon.svg';
import twitter from '../assets/twitter_icon.svg';

import './componentStyles/home.css';

import portrait from '../assets/archery-orig.png';

export default class Home extends React.Component {
  render() {
    return (
      <div className="card-container">
        <Card className="home-card" style={{ width: '86vw' }}>
          <Card.Body>
            <Card.Img
              className="portrait"
              src={portrait}
              alt="portrait of Crue Jameson"
            />
            <div className="card-contents">
              <Card.Title>Hello There!</Card.Title>
              <Card.Text>
                My Name Is Eric Crue Jameson. I'm a new
                <span className="color-change"> Web Developer</span> from
                Colorado. Coming from a background in construction, I'm no
                stranger to hard work. I love working with HTML5, CSS, and
                React. I also enjoy data-entry with MongoDB and SQL databases.
                I'm learning fast and ready to keep expanding my knowledge base.
              </Card.Text>
              <Button
                href="https://github.com/Cruebee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Out My Code
              </Button>
            </div>
          </Card.Body>
          <Card.Footer className="home-card-footer">
            <h6 className="footer-title">Follow Me Here</h6>
            <a
              href="https://github.com/Cruebee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHub} alt="GitHub Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/crue-jameson-a8bb0219a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="linkedIn logo" />
            </a>
            <a
              href="https://www.instagram.com/cruebeedoobie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram Logo" />
            </a>
            <a
              href="https://twitter.com/cruebee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter Logo" />
            </a>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
