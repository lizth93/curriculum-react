export interface Props {
  children?: React.ReactNode;
  className?: string;
}

export interface Certifications {
  name: string;
  altText: string;
  logo: string;
  period: string;
  title: string;
  type: string;
  urlCertificate?: string;
}

export interface Project {
  name: string;
  year: number;
  status: string;
  tools: string[];
  url: string;
  img: string;
  urlJavascript?: string;
  gitHub: string;
}
