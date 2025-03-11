import Home from "./src/page/Home/Home";
import Login from "./src/page/Login/Login";
import Register from "./src/page/Refester/register ";

let routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register ", element: <Register /> }
];

export default routes;
