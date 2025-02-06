import { FC } from "react";
import {
  Header,
  NavMenuButton,
  PrimaryNav,
  Title,
} from "@trussworks/react-uswds";
import NavLink, { NavLinkProps } from "./NavLink";
import useAppBar from "./useAppBar";

interface AppBarProps {
  header: string;
  navLinks: NavLinkProps[];
}

const AppBar: FC<AppBarProps> = ({ header, navLinks }) => {
  const { expanded, handleToggleExpand } = useAppBar();
  return (
    <>
      <Header basic={true} showMobileOverlay={expanded}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>{header}</Title>
            <NavMenuButton onClick={handleToggleExpand} label="Menu" />
          </div>
          <PrimaryNav
            items={navLinks.map((navLink) => (
              <NavLink {...navLink} />
            ))}
            mobileExpanded={expanded}
            onToggleMobileNav={handleToggleExpand}
          />
        </div>
      </Header>
    </>
  );
};

export default AppBar;
