interface Props {
  src: string;
  alt: string;
  title: string;
  text: string;
}

function Logo({ src, alt, title, text }: Props) {
  return (
    <div className="skills">
      <img className="skill-img" src={src} alt={alt} />
      <p className="logo-title">{title}</p>
      <p className="logo-text">{text}</p>
    </div>
  );
}

export default Logo;
