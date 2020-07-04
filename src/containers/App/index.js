import React from "react";
import { Drawer } from "../../components/Drawer";
import "./App.css";

const App = ({ children }) => {
  return (
    <>
      {children}
      <Drawer />
    </>
  );
};

export default App;
