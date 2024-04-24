import React from "react";
import MovieNavbar from "../Components/Navbar/Entertainment/MovieNavbar.Component";

const MovieLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default MovieLayout;
