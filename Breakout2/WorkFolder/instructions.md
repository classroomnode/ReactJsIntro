# ReactJs Fundamentals

## Things to Consider

1. Unit Testing

   `Verifies the working of individual units of code as expected. It is an essential component during errorless code shipping.
   Although in the initial stage of development, it is not so required as the application still in the innovation phase but it really helps to build better apps.`

2. Linting

   `Linting helps in identifying any programmatic and stylistic errors in
   React It reduces errors and improves the overall quality of the code.
   You can also use a style guide which also helps in checking the code against basic issues such as syntax errors, incorrect naming, spacing, etc
   `
3. Error Tracking

   `Finding and fixing errors is an essential part of application development. As your application starts to grow, it becomes harder and time-consuming to track the exact error.
  To handle this we can use Sentry which reports errors in real-time, easy tracking, prioritize, identify, reproduce, and fix errors.
   `
4. Depedency Injection

    `Dependency Injection means feeding the data into the application according to need. It’s also very useful for testing as it allows dependencies to be mocked. You can test the application with fake data easily.
    You must have heard of it in Angular Application, but React does not have an inbuilt dependency injection. You can inject all dependencies in one place, and use all other components via props. The dependencies can be wrapped using high order components.`

5. Localization

    `
    To Build a application for a large audience it is important to take care globalization and localization
    `
6. Configuration Management

    `
    The initial settings of your application should be properly managed as it becomes difficult when the application grows.You can manage all your app configuration in the .env file and access via process.env.SOME_DATA but config module provides a more efficient way to manage all your app configurations.
    `



## Components
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
### React Component

```js
import React from "react"

function HelloWorld()
{
    return <div>{"Hello"}</div>
}

export default HelloWorld

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      return <div>{"Hello"}</div>
    );
  }
}
export default HelloWorld
```

### React Component With Props

```js
import React from "react"

function HelloWorld(props)
{
    return <div>{props.name}</div>
}

export default HelloWorld
```

## Rendering a Component

To render a component or element 
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
Note: Always start component names with a capital letter.

React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.



## Composing Components
Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

For example, we can create an App component that renders Welcome many times

```js

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```


### Handling Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.
For example, the HTML:

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>

```
is slightly different in React:
```html
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

```js
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

```

### Basic List Component and keys
To show a list of items array map function to iterate the items
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:


```js
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

## Hooks
let you use state and other React features without writing a class.
https://reactjs.org/docs/hooks-intro.html#motivation

### useState Hook
```js

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

Equivalend Class Example

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```



### useEffect Hook
The Effect Hook lets you perform side effects in function components:
```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

`equivalent in class`

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

```
### Custom Hooks

With React Hooks we can create our custom hooks

```js
import { useState, useEffect } from 'react';

function useTaskStatus(taskId) {
  const [taskStatus, setTaskStatus] = useState(null);

  useEffect(() => {
     let url =
    `http://localhost:8080/api/todo/status/${taskId}`;
    fetch(url)
    .then(data => data.json())
    .then(result => {
     setTaskStatus(result)
    }).catch((error)=>{
       //log
    });
  });

  return taskStatus;
}

function Todo({todoItem})
{
  const taskStatus=useTaskStatus(todoitem.id);

  return <div>{taskStatus}</div>
}
```


## Common usages

### Perform Http call

fetch api is available by default 
There are lots of 3rd party libraries are avaialble with advanced functionalities
eg : axios

```js
 let url =
    `http://localhost:8080/api/todo/status/${taskId}`;
    fetch(url)
    .then(data => data.json())
    .then(result => {
     setTaskStatus(result)
    }).catch((error)=>{
       //log
    });
```

## Variables
use `let` and const `keywords` instead of var


## Seperation of concerns

Always ensure to apply solid principles.Give a good focus to the folder structure.



## Excercise

Create a react functional component
it should use useState Hook.
it should use a useEffect Hook
it should perform a api call which have created in the backend session


