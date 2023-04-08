import ButtonBootstrap from "react-bootstrap/Button";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: Props) {
  return (
    <ButtonBootstrap
      className={props.className}
      variant="primary"
      onClick={props.onClick}
      type={props.type ? props.type : "button"}
    >
      {props.children}
    </ButtonBootstrap>
  );
}

export default styled(Button)`
  font-size: 2rem;
  background-color: rgb(13, 122, 138);
  display: inline-block;
  text-decoration: none;
  border-radius: 9px;
  transition: all 0.5s;
  font-weight: inherit;
  border: none;
  padding: 0.8rem 3.2rem;

  &:hover {
    background-color: #0c8599;
    transform: translateY(-0.3rem);
  }
`;
