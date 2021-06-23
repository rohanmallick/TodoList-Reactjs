import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Nav from "./components/Nav";
import Todo from "./components/Todo-list";

import Footer from "./components/Footer";

export const App = () => {
  return (
    <>
      <Nav title=" Todo List" />

      <Todo />

      <Footer />
    </>
  );
};

export default App;
