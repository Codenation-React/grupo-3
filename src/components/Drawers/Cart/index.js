import React from 'react';
import './styles.css';

export default function SideBar({ closeDrawer }) {
  // const [searchText, setSearchText] = useState('');

  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <div className="sidebar__header__content">
          <span className="sidebar__exit" onClick={closeDrawer}>
            <i className="fas fa-arrow-left"></i>
          </span>
          <span className="sidebar__header__title">Sacola (n)</span>
        </div>
      </header>

      <div className="sidebar__product-list">
        <span className="sidebar__empty">Nenhum item encontrado :\</span>
      </div>
    </div>
  );
}
