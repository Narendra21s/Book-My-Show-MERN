import React from "react";
import Navbar from "../Components/Navbar/Entertainment/Navbar.Component";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default DefaultLayout;
