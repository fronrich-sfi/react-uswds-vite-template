import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./routes/Home";
import Error from "./routes/Error";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import useApp from "./useApp";
import { GridContainer } from "@trussworks/react-uswds";
import useGlobalRHFContext from "./hooks/ReactHookForm/useGlobalRHFContext";
import AxiosQueryDemo from "./routes/AxiosQueryDemo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const { links } = useApp();
  const { RHFProvider, providerValues } = useGlobalRHFContext();
  const queryClient = new QueryClient();
  return (
    <>
      <RHFProvider value={providerValues}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppBar header="My Project" navLinks={links} />
            <GridContainer containerSize="desktop-lg">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/axios-query-demo" element={<AxiosQueryDemo />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </GridContainer>
          </BrowserRouter>
        </QueryClientProvider>
      </RHFProvider>
    </>
  );
};

export default App;
