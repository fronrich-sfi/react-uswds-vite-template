import { NavLinkProps } from "./components/AppBar/NavLink";

const useApp = () => {
  const links: NavLinkProps[] = [
    {
      href: "/",
      label: "Home (Context + RHF Demo)",
      icon: "fluent:home-24-filled",
    },
    {
      href: "/axios-query-demo",
      label: "Axios + Tanstack Query Demo",
    },
  ];

  return { links };
};

export default useApp;
