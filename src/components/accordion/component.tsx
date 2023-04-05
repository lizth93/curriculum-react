import AccordionBootstrap from "react-bootstrap/Accordion";
import Button from "../button";

interface certifications {
  name: string;
  altText: string;
  logo: string;
  period: string;
  title: string;
  type: string;
}

interface Props {
  className?: string;
  certifications: certifications[];
}

function Accordion(props: Props) {
  return (
    <AccordionBootstrap defaultActiveKey="0" className={props.className}>
      <AccordionBootstrap.Item eventKey="0">
        <AccordionBootstrap.Header>
          {props.certifications[0].name}
        </AccordionBootstrap.Header>
        <AccordionBootstrap.Body>
          {props.certifications.map((element, i) => (
            <div className="grid--certifications" key={i}>
              <img
                src={`/logos/${element.logo}`}
                className="education-img udemy-logo"
                alt={element.altText}
              />
              <div className="elemt-1">
                <p className="title-name">{element.period}</p>
                <p className="title-name">{element.title}</p>
              </div>
              <Button>View</Button>
            </div>
          ))}
        </AccordionBootstrap.Body>
      </AccordionBootstrap.Item>
    </AccordionBootstrap>
  );
}

export default Accordion;
