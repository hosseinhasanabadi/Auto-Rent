import Home from "./src/page/Home/Home";
import Login from "./src/page/Login/Login";

let routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> }
];

export default routes;
