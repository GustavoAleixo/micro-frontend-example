///<reference types="react" />

type TemplateProp = {
  name: string;
};

declare module "home/Header" {
  const Header: React.ComponentType;

  export default Header;
}

declare module "home/Footer" {
  const Footer: React.ComponentType;

  export default Footer;
}

declare module "home/Template" {
  const Template: React.ComponentType<TemplateProp>;

  export default Template;
}
