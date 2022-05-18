import React from "react";
import { Route, Routes } from "react-router-dom";
import ToDoDetail from "./components/ToDoDetail";

const Todo = React.lazy(() => import("./components/Todo"));

const AppRoutes = (props) => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Suspense fallback={<div>Loading catalog</div>}>
              <Todo {...props} />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/todo/:id"
          element={
            <React.Suspense fallback={<div>Loading catalog</div>}>
              <ToDoDetail {...props} />
            </React.Suspense>
          }
        />
        <Route exact path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
