import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class FlixModal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <Card className="modal-card">
        <div>{this.props.children}</div>
        <div>
          <Button onClick={this.onClose}>Close</Button>
        </div>
      </Card>
    );
  }
}
