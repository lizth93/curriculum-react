import ButtonBootstrap from "react-bootstrap/Button";

interface Props {
  children: React.ReactNode;
}

function Button(props: Props) {
  return <ButtonBootstrap variant="primary">{props.children}</ButtonBootstrap>;
}

export default Button;
