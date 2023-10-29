interface HeaderProps {
  title?: string;
}

const Header = ({ title = '' }: HeaderProps) => {
  return <>{title}</>;
};

export default Header;
