interface Props {
  src: string;
  alt: string;
  title: string;
}

function Logo({ src, alt, title }: Props) {
  return (
    <div className="skills">
      <img className="skill-img" src={src} alt={alt} />
      <p className="logo-title">{title}</p>
    </div>
  );
}

export default Logo;
