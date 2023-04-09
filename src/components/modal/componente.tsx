import Button from "react-bootstrap/Button";
import ModalBootstrap from "react-bootstrap/Modal";

import { ModalProps } from "react-bootstrap";
import { Certifications } from "types";
import styled from "styled-components";

interface MyModalProps extends ModalProps {
  selectedcertification: Certifications | null;
}

function Modal(props: MyModalProps) {
  return (
    <ModalBootstrap
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.selectedcertification && (
        <>
          <ModalBootstrap.Header closeButton>
            <ModalBootstrap.Title id="contained-modal-title-vcenter">
              {props.selectedcertification.title}
            </ModalBootstrap.Title>
          </ModalBootstrap.Header>
          <ModalBootstrap.Body>
            <img
              src={`/certifications/${props.selectedcertification.urlCertificate}`}
              className="certifications"
              alt={props.selectedcertification.title}
            />
          </ModalBootstrap.Body>
          <ModalBootstrap.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </ModalBootstrap.Footer>
        </>
      )}
    </ModalBootstrap>
  );
}

export default styled(Modal)`
  .certifications {
    width: -webkit-fill-available;
  }
`;
