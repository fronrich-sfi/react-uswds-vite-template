import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Error from "./routes/Error";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import useApp from "./useApp";
import { GridContainer } from "@trussworks/react-uswds";

const App = () => {
  const { links } = useApp();
  return (
    <>
      <AppBar header="Boilerplate Template" navLinks={links} />
      <GridContainer containerSize="desktop-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </GridContainer>
    </>
  );
};

export default App;
