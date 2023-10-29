interface FooterProps {
  text?: string;
}

const Footer = ({ text = '' }: FooterProps) => {
  return <>{text}</>;
};

export default Footer;
