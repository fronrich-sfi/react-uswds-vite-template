import { FC } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router";

export interface NavLinkProps {
  label: string;
  href: string;

  /**
   * Iconify Icon that can be used as a secondary indicator
   * of what this nav link goes to
   */
  icon?: string;

  /**
   * open the link in a new tab
   */
  newTab?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ label, href, icon, newTab }) => {
  return (
    <Link
      target={newTab ? "_blank" : "_self"}
      to={href}
      key={href}
      className="usa-nav__link"
      style={{ display: "flex", gap: "0.25rem" }}
    >
      {icon && <Icon icon={icon} />}
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
