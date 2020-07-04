import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import Search from "../../components/Search";

export const Drawer = () => {
  const [isVisible, setVisible] = useState(false);

  const open = () => {
    setVisible((prevState) => !prevState);
  };

  const close = () => {
    setVisible(false);
  };

  return (
    <div className={`app ${isVisible ? "drawer-is-visible" : ""}`}>
      <Navbar drawerClick={open} />
      {isVisible && <Search closeDrawer={close} />}
    </div>
  );
};
