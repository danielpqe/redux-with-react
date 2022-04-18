import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./menu";
import Users from "./users/index";

const Tasks = () => <div>Tasks</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
