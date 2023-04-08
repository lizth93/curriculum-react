import { useState } from "react";
import AccordionBootstrap from "react-bootstrap/Accordion";
import Button from "../button";
import Modal from "components/modal/componente";
import { certifications } from "types";

interface Props {
  className?: string;
  certifications: certifications[];
}

function Accordion(props: Props) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedCertification, setSelectedCertification] =
    useState<certifications | null>(null);

  const handleViewClick = (certification: certifications) => {
    setSelectedCertification(certification);
    setModalShow(true);
  };

  return (
    <>
      <AccordionBootstrap defaultActiveKey="-1" className={props.className}>
        <AccordionBootstrap.Item eventKey="0">
          <AccordionBootstrap.Header>Certifications:</AccordionBootstrap.Header>
          <AccordionBootstrap.Body>
            {props.certifications.map((element, i) => (
              <div className="grid--certifications" key={i}>
                <img
                  src={`/logos/${element.logo}`}
                  className="education-img udemy-logo"
                  alt={element.altText}
                  title={element.name}
                />
                <div className="elemt-1">
                  <p className="title-name">{element.period}</p>
                  <p className="title-name">{element.title}</p>
                </div>
                <Button onClick={() => handleViewClick(element)}>View</Button>
              </div>
            ))}
          </AccordionBootstrap.Body>
        </AccordionBootstrap.Item>
      </AccordionBootstrap>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        selectedcertification={selectedCertification}
      />
    </>
  );
}

export default Accordion;
