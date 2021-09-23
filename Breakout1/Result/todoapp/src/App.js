import "./App.css";
import React from "react";

import ExampleWithFunction from "./components/ExampleWithFunction";
/*eslint-disable*/
import ExampleWithClass from "./components/ExampleWithClass";
/*eslint-disable*/
import ExampleWithHttpService from "./components/ExampleWithHttpService";

function App() {
  return (
    <div className="App">
      {/* <ExampleWithClass></ExampleWithClass>
      <ExampleWithHttpService></ExampleWithHttpService> */}

      <ExampleWithFunction></ExampleWithFunction>
    </div>
  );
}

export default App;
