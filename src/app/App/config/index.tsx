import { createBrowserRouter } from "react-router-dom";
import { App } from "../ui/App";
import { Error404 } from "src/pages/Error404";
import { ROUTES } from "src/shared/constants";
import { Home } from "src/pages/Home";
import { Profile } from "src/pages/Profile";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.PROFILE, element: <Profile /> },
    ],
  },
]);
