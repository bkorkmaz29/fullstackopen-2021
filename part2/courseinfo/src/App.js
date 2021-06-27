import React from "react";
import Course from "./components/course";

const App = ({ courses }) => (
  <div>
    <Course courses={courses} />
  </div>
);

export default App;
