// Ex3_Route.js
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Ex3_Route0 from "./Ex3_Route0";

export default function Ex3_Route() {
  return (
    <BrowserRouter>
      <div>
        <p>Main</p>
        <ul>
          <li>
            <Link to="/topics">topics</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/topics/*" element={<Ex3_Route0 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
