// Ex3_Route0.js
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Ex3_Route1 from "./Ex3_Route1";
import Ex3_Route2 from "./Ex3_Route2";

export default function Ex3_Route0() {
  return (
    <div>
      <p>these are topics</p>
      <ul>
        <li>
          <Link to="one">one</Link>
        </li>
        <li>
          <Link to="two">two</Link>
        </li>
      </ul>
      <Routes>
        <Route path="one" element={<Ex3_Route1 />} />
        <Route path="two" element={<Ex3_Route2 />} />
      </Routes>
    </div>
  );
}
