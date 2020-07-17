import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalTitle from 'react-bootstrap/ModalTitle';

export default class Flix extends React.Component {
  render() {
    return (
      <Modal>
        <ModalHeader closeButton>
          <ModalTitle>Project Title</ModalTitle>
        </ModalHeader>
        <ModalBody>Project Details Main</ModalBody>
        <ModalDialog>Secondary Text</ModalDialog>
        <ModalFooter>
          <Button
            variant="primary"
            onClick={''}
            href="https://cruebee.herokuapp.com/client"
            target="_blank"
            rel="noopener noreferrer"
          ></Button>
          <Button variant="secondary" onClick={''}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
