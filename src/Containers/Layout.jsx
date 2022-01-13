import React from "react";
import Header from "../Components/Header";
function Layout({ children }) {
  return (
    <div className="Layout">
      <Header></Header>
      {children}
    </div>
  );
}

export default Layout;
