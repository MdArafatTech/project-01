// src/routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Account from "../component/Account";
import HeaderLoginButton from "../component/LoginButton";
import HeaderLogoutButton from "../component/LogoutButton";
import Clock from "../component/clock";
import Services from "../pages/Services";
import Forgot from "../component/Forgot";
import ContactFrom from "../component/ContactFrom";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/account", element: <Account /> },
      { path: "/services", element: <Services /> }, 
      { path: "/loginbutton", element: <HeaderLoginButton /> },
      { path: "/logoutbutton", element: <HeaderLogoutButton /> },
      { path: "/clock", element: <Clock /> },
      { path: "/forgot", element:<Forgot></Forgot> },
      { path: "/contactfrom", element:<ContactFrom></ContactFrom> },
    ],
  },
]);

export default Routes;