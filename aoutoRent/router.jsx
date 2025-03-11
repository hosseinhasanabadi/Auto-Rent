import Home from "./src/page/Home/Home";
import Login from "./src/page/Login/Login";
import Register from "./src/page/Register/Register";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  //{ path: "/register ", element: <Register /> },
  
];

export default routes;
