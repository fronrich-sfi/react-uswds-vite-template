import { NavLinkProps } from "./components/AppBar/NavLink";

const useApp = () => {
  const links: NavLinkProps[] = [
    { href: "/", label: "Home", icon: "fluent:home-24-filled" },
    {
      href: "https://trussworks.github.io/react-uswds/?path=/docs/welcome--docs",
      label: "ReactUSWDS Storybook",
      newTab: true,
    },
    {
      href: "https://icon-sets.iconify.design/",
      label: "Iconify Library",
      newTab: true,
    },
    {
      href: "https://tanstack.com/query/v4/docs/framework/react/guides/queries",
      label: "Tanstack Query Docs",
      newTab: true,
    },
    {
      href: "https://axios-http.com/docs/example",
      label: "Axios Docs",
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
