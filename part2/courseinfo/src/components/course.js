import React from "react";

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map((part, key) => (
      <Part key={key} part={part.name} exercises={part.exercises} />
    ))}
  </div>
);

const Total = ({ parts }) => {
  const sum = parts.reduce((s, p) => s + p.exercises, 0);

  return <p>Number of exercises {sum}</p>;
};

const Course = ({ courses }) => (
  <div>
    {courses.map((course) => (
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <strong>
          <Total parts={course.parts} />
        </strong>
      </div>
    ))}
  </div>
);
export default Course;
