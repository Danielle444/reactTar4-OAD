import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "characters", element: <Characters /> },
      { path: "characters/:id", element: <CharacterDetails /> },
      { path: "*", element: <NotFound /> },
    ]
  }
]);

export default router;
