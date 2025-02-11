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
    {
      href: "https://trussworks.github.io/react-uswds/?path=/docs/welcome--docs",
      label: "ReactUSWDS Storybook",
      newTab: true,
    },
    {
      href: "https://recharts.org/en-US/examples",
      label: "Recharts Examples",
      newTab: true,
    },
  ];

  return { links };
};

export default useApp;
