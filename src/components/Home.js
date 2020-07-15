import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Home extends React.Component {
  render() {
    return (
      <div className="card-container">
        <Card className="home-card" style={{ width: '80vw' }}>
          <Card.Body>
            <Card.Title>Hello There!</Card.Title>
            <Card.Text>
              My Name Is Eric Crue Jameson. I'm a new Web Designer from
              Colorado.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button href="#aboutMe">Check Out My Code</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
