import React from 'react';
import Card from 'react-bootstrap/Card';

export default class ProjectCard extends React.Component {
  rener() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.project.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
