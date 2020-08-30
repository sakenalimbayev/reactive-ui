import React, { useState } from "react";

import "./styles.scss";

const SideMenu = ({ menuItems }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="side-menu">
      {menuItems.map((item, index) => (
        <a
          key={item.title}
          href="#"
          className={`menu-item ${activeTab === index ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          <i className="material-icons">{item.icon}</i>
          <p>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default SideMenu;
