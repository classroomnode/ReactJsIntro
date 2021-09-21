# ReactJs Fundamentals

## Components
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components

### React Component

```js
import React from "react"

function HelloWorld()
{
    return <div>{"Hello"}</div>
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

### React Component With localState

```js
import React,{useState} from "react"

function HelloWorld()
{
   const[localState,setLocalState]=useState("test")
    return <div>{localState}</div>
}

export default HelloWorld
```


### React Component With useEffect

```js
import React,{useEffect, useState} from "react"

function HelloWorld()
{   
    const [testValue,setTestValue]=useState("")
    
    useEffect(()=>{
        console.log("Hi am here")
    },[])

    useEffect(()=>{
        console.log(`Hej the new value : ${testValue}`)
    },[testValue])

    function changeState()
    {setTestValue(Math.random())

    }

    return <div onClick={changeState}>{myState}</div>
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
To show a list of items
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

## Excercise

Create a react component with local state and performs and http call when the component is initialized
