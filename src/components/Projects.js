import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Flix from './modals/Flix';

export default class Projects extends React.Component {
  state = { show: false };

  showFlix = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Container>
        <Flix />
        <CardGroup>
          <Card bg="dark">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title>ProjectTitle</Card.Title>
              <Card.Text>Brief Project Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                onClick={(e) => {
                  this.showFlix();
                }}
              >
                Project Details
              </Button>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title>ProjectTitle</Card.Title>
              <Card.Text>Brief Project Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>Project Details</Button>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title>ProjectTitle</Card.Title>
              <Card.Text>Brief Project Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>Project Details</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
        <div className="spacer"></div>
        <CardGroup>
          <Card bg="dark">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title>ProjectTitle</Card.Title>
              <Card.Text>Brief Project Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>Project Details</Button>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title>ProjectTitle</Card.Title>
              <Card.Text>Brief Project Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>Project Details</Button>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Img variant="top" src={''} />
            <Card.Body>
              <Card.Title>ProjectTitle</Card.Title>
              <Card.Text>Brief Project Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button onClick>Project Details</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}
