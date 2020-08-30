import React from "react";
import SideMenu from "../../shared/components/SideMenu";
import { MENU_ITEMS } from "../../shared/constants";
import logo from "../../assets/images/logo.svg";
import AllShipments from "../AllShipments";

import "./styles.scss";

const App = () => {
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <h2>Reactive Delivery</h2>
      </header>
      <main>
        <SideMenu menuItems={MENU_ITEMS} />
        <AllShipments />
      </main>
    </>
  );
};

export default App;
