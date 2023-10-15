import { Outlet } from "react-router-dom";
import "./root.css";

export const RootLayout = () => {

  return (
    <>
      {/* <Link to="/movies" className="app-header">
        <h2>FilmHunt</h2>
      </Link> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};
