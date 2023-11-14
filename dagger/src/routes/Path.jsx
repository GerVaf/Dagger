import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Documentation from "../pages/Documentation";
import GettingStarted from "../pages/Sidebar/GettingStarted";
import Button from "../pages/Sidebar/Button";

export const paths = [
  {
    path: "getting-started",
    title: "Getting Started",
    element: <GettingStarted />,
  },
  {
    path: "button",
    title: "Button",
    element: <Button />,
  },
];

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Documentation />}>
        <Route index element={<GettingStarted />} />
        {paths.map((pt, i) => {
          return <Route key={i} path={pt.path} element={pt.element} />;
        })}
      </Route>
    </Routes>
  );
};

export default Path;
