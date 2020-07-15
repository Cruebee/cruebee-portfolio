import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './componentStyles/home.css';

import portrait from '../assets/archery-orig.png';

export default class Home extends React.Component {
  render() {
    return (
      <div className="card-container">
        <Card className="home-card" style={{ width: '80vw' }}>
          <Card.Body>
            <Card.Img className="portrait" src={portrait} />
            <div className="card-contents">
              <Card.Title>Hello There!</Card.Title>
              <Card.Text>
                My Name Is Eric Crue Jameson. I'm a new{' '}
                <span className="color-change">Web Developer</span> from
                Colorado. I'm learning fast and ready to keep growing.
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
          <Card.Footer>
            <div></div>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
