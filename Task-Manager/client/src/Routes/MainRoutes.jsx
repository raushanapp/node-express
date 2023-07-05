import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from '../Pages/Home'
import EditTask from '../Pages/EditTask';
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit-task/:id" element={<EditTask />} />
      <Route path="*" element={<h1>Not Route Found</h1>} />
    </Routes>
  );
}

export default MainRoutes