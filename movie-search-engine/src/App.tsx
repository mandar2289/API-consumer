import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { RootLayout } from "./components/Root";
import { ErrorPage } from "./pages/Error";
import { MovieDetails } from "./components/MovieDetails";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/movies" />, errorElement: <ErrorPage /> },
  {
    path: "/movies",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/movies", element: <Home /> },
      { path: "/movies/:movieId", element: <MovieDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
