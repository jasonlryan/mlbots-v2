import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { pages } from "../config/pages";
import "../styles/index.css";

export const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Navigation pages={pages} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
