import React from 'react';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import FlixModal from './modals/FlixModal';

export default class Projects extends React.Component {
  state = {
    show: false,
  };
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <Container>
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
                  this.showModal(e);
                }}
              >
                Project Details
              </Button>
              <FlixModal onClose={this.showModal} show={this.state.show}>
                Message In Modal
              </FlixModal>
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
