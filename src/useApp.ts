import { NavLinkProps } from "./components/AppBar/NavLink";

const useApp = () => {
  const links: NavLinkProps[] = [
    { href: "/", label: "Home" },
    {
      href: "https://trussworks.github.io/react-uswds/?path=/docs/welcome--docs",
      label: "ReactUSWDS Component Library",
      newTab: true,
    },
  ];

  return { links };
};

export default useApp;
