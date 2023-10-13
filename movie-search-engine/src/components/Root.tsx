import { Outlet, Link } from "react-router-dom";
import "./root.css";

export const RootLayout = () => {
  return (
    <>
      <h2 className="app-header">FilmHunt by Mandar</h2>
      <main>
        <Link to="/movies" className="link-style">
          Explore Movies and Series
        </Link>
        <Outlet />
      </main>
    </>
  );
};
