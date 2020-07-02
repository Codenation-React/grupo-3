import React, { useState } from "react";
import "./index.css";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchText, setSearchText] = useState("");

  const toggleSideBar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  // Set width
  const width = isOpen ? 375 : 0;

  return (
    <div className="sidebar" style={{ width }}>
      <header className="sidebar__header">
        <div className="sidebar__header__content">
          <span onClick={toggleSideBar}>
            <i className="fas fa-arrow-left"></i>
          </span>
          <span className="sidebar__header__title">Buscar produtos</span>
        </div>
      </header>

      <div className="sidebar__search">
        <input
          className="sidebar__search__input"
          type="text"
          name="text-search"
          placeholder="Buscar por produto..."
        />
      </div>
      <div className="sidebar__product-list">
        <span className="sidebar__empty">Nenhum item encontrado :\</span>
      </div>
    </div>
  );
}
