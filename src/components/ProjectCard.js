import React from 'react';
import Card from 'react-bootstrap/Card';

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  rener() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>ProjectTitle</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
