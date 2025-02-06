import { FC } from "react";

export interface NavLinkProps {
  label: string;
  href: string;

  /**
   * open the link in a new tab
   */
  newTab?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ label, href, newTab }) => {
  return (
    <a
      target={newTab ? "_blank" : "_self"}
      href={href}
      key={href}
      className="usa-nav__link"
    >
      <span>{label}</span>
    </a>
  );
};

export default NavLink;
