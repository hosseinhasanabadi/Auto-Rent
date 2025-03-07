import React from "react";
import { useRoutes } from "react-router";
import routes from "../router";

function App() {
  const router = useRoutes(routes);
  return <div>{router}</div>;
}

export default App;
