import React from "react";
import Home from "./components/Home";
import { AppProvider } from "./provider";

const App: React.FC = () => (
  <AppProvider>
    <Home />
  </AppProvider>
);

export default App;
