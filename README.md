# Knowledge
Knowledge works

<h2>KEYWORDS:</h2>
css, html, javascript, react, and more to come to include express, mongodb etc


## Html, CSS, JavaScript 

JavaScript is a programming language. It is also supported on the browser. It can also work with/out the browser.
What type of programming language is JavaScript? It is a loosely typed lanaguage
Variables are used to store data in memory. In JavaScript, variables is created by using var. Variables in JavaScript do not have datatypes.
loops - help us to take repeated decisions
if/else loop - decision making if supported with the help of if else loop. if will have a condition. if the condition is true then the if block will be exceuted otherwise, if the condition is false then the else block will be executed.
Repeatitive loops - This loops keep repeating till a particular condition is reached. Two types of loops are present under this category; 
1. For Loop: has three parts; initialization, condition, and increment/decrement. It continue repeating till the condition becomes false.
2. while loop: 
1 
2 2
3 3 3
4 4 4 4

while loop: it is a repeatitive loop. WHile loop and For loop are interchangeable. 

Functions - are used to make code more reuseable. It can be created once and used any number of times. Hence, they are known as reuseable. A function which has a return statement returns the result when called.

New features - it was not changed by W3C federation. In 2015, scientist from W3C started adding new features called ES2015 to JavaScript and added each and every subsequent year. 
1. let - replace var with let where the variables are not global. Preference is let in JavaScript i.e., variables of local scope
2. const - they are used to create varables which can be assign values just once. Once you assign value to a variable you cannot change it
3. default arguments - functions can have defaults arguments
4. Template Strings - console.log(`${message} ${name} `) - concatenate things
5. arrow functions - provides an easier way of writing functions. As an example replace function 1 with function 2
//function 1
let add = function(a, b) { console.log(a + b) }
//function 2 - function 2 is an arrow function
let addArrow = (a, b) => console.log(a + b)
variable = (parameter) => function body
if you have only a single line in function body then no need of curly brackets. If no parameter(s), only empty brackets needs to be passed. 

Assignment: 
1. create employee class
2. have employe name, age, base salary, bonus salary, address
3. create a function that prints all the details
4. create a function to print total salary

Inheritance: stands parent-child relationship between classes. In parent-child relationship, the child class gets properties and functions from parent class.

super() whenever a class extends another class and a constructor is created, the constructor has to call the constructor of the base class  and to do that it makes use of super()

Multiple Inheritance - 1. https://stackoverflow.com/questions/29879267/es6-class-multiple-inheritance
2. https://stackoverflow.com/questions/9163341/multiple-inheritance-prototypes-in-javascript

BROWSER -
Browser provides in-built support for javaScript. When javaScript runs on browser it provides many in-built objects. For example, document, window, etc These objects are available only in browser. We can embbed js code in html. When js is used to dynamically create html code, we call it DHTML(dynamic html).

document.write() - used to display an html tag from javascript e.g. document.write("<b> JavaScript2</b>")

EVENTS -

Browser js supports event handling. Events are predefined for each html type.

within a given html, if you want to uniquely identify an element we can make use of an id attribute. within a given page id is supposed to be unique. From javascript perspective with can retrieve an element by using id. with the help of the getElementById

connected select boxes

REST API - 
Earlier UI was tightly coupled with data. The problem with that is whenever some data changes which does not impact UI, but UI technologies will still need t be changed. To solve this problem, a new architecture called REST API was found. In REST API, we have a URL in which exposes data. 

## React and more
React is a new generation UI framework. React is basically used to make a spa (single page application). 
SPA are modern applications. React is supposed to be a fast memory efficient UI. 

NB: In today's world tow famous reac technology, 1. react 2. angular 

cons of angular: 
- has many versions
- incompatible versions

Pros React 
- even though it has many versions they are compatible 
- facebook created react

This course is FSD - Full Stack Dev. There are two important terms

1. MERN - Mongo, Express, React and Node

Mongo - noSQL database that handles persistence
Express - handles restful webservice
React - User Interface (UI) technology 
Node - A framework upon which all the others are made. Hence, it is a facilitator.

2. MEAN - Mongo, Express, Angular and Node

Mongo - noSQL database that handles persistence
Express - handles restful webservice
Angular - User Interface (UI) technology 
Node - A framework upon which all the others are made. Hence, it is a facilitator.

Our focus is towards MEARN.

React uses a combination of xml and javascript, which is known as JSX

Prerequest - 

React makes use of virtual DOM. In a browser there is a DOM, which is responsible for showing on the browser.
Virtual DOM will contact actual DOM only when there is a change. As a result the performance of our application increases.
DOM is the actual place where the browser is showing. But the virtual DOM verifies if there is an actual change before going to the DOM.

React structure -

React follows a component based architecture. Others also call it composition. 

Root component - 
 - sub component 1
    - sub component 1 1
    - sub component 1 2
 - sub component 2

JSX allows you to include a javascript code/function as a tag.

React supports two types of components. They are functional components and class-based components.
Functional based components use javascript functions. Whereas class-based components use object oriented principles.

In class-based component, you will do the following;
- import React from 'react';
- replacing function App   with class App extends React.Component
- Also, have the following structure in 

class App extends React.Component{
  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with us.
          </a>
        </header>
      </div>
    );
  }

  }

  - It is possible to combine class-based and functional-based components. 
  - Post version 18 of React technology, react prefers functional-based components over class-based components.
  
Steps for React

1. npx create-react-app-offline -n foldername 
2. cd into foldername
3. fix permission denied by type chmod 777 URL
4. npm install react-tsparticles 

use link for code: https://www.npmjs.com/package/react-tsparticles
copy the 'Options object'

Post 16.8.0 Functional components can support state with the help of useStateHook

Calculator in React or JQuery

- One Input box
- there can be number buttons like 0 to 9
- operations in form of buttons like -,+,x, / =
- One output box to show results
- One reset/clear clear screen buttons


Interview question

https://github.com/Nabapadma-sarker/react-slideshow-app

React bootsrap is like MUI, its a framework built on react. It gives beautiful User Interfaces with good look'n feel.


####Note on useContext 
context in react is used to solve the problem of property drilling. 

What is property drilling?

property drilling e.g., 

- component1, has some abc properties. 
- sub component1 i.e., child of component1. 
- grand component1 is a child of sub component1 and it requires the abc properties of sub component1.
- even subcomponent1 is not using that property abc, it still has to grab that component from component1 to grand component1.

We can solve this problem using context. Thus, any component in the hierachy can grab the property.

We put things like theming which is uniform through the pages in context.
Things commong accross can be part of context

Redux 

Redux is a third party software
it is a state management - 
react is totally dependent on state mmanagement and so redux plays a big role.
redux easily integrates with react
redux also works with other frameworks
we have to make use of react-redux plugin to make use of it in react

Terminology

UI - is a javascript trigger action, at the minimum it must have type
Middlewares - actions flow through middleware. They are process of actions. process and fetch
Reducer - Pure function - reducer is pure function. it does the following.
            1. it will store state and manage any change to states.
            2. If state change it will inform the UI


####react-redux

Redux flow ---terminlogies

   trigger action ( {type:})	                    ( store state) manage state
UI----------------------------->middlewares(processors(fetch)-----> reducer ( pure function ----> UI

For instance, in the reduxcounter example,

//use dispatch is used to send request
  const dispatch = useDispatch();
//useSelector is used to get the required data from state
  const data = useSelector((state) => state.counter);
//Action is triggered by using dispatch
//Action will contsin actionType + any data
  const handleIncrement = () => dispatch({ type: "inc" });

----------------------------------
  DEPLOYING REACT App
-----------------------------------------------
  To deploy a react app, we need to run "npm run build" commmand. This will generate a build folder, which can be then 
  used to run the application. When we run "npm run build", it creates a compressed the version of the application made.

  npm run build
  npm install -g serve
  serve -s build


GIT COMMANDS
-----------------------
 1. git init
 2. git add --all
 3. git commit -m "commmit"
 4. git remote add fullstack https://github.com/ppokah0111/fullStack.git  
 5. git push --set-upstream fullstack master


To get login token in place of password
1. Goto Settings
2. Developer Settings
3. Personal Access Token 
4. Generate new Token and use as password
5. Remember to delete toke after use


Other Important things:
------------------------------------
npm install @mui/material @emotion/react @emotion/styled

import Grid from ‘@mui/material/Grid’;

npm install @mui/x-data-grid

npm install react-router-dom

git remote add fullstack https://github.com/ppokah0111/fullStack.git

npm install @mui/material @emotion/react @emotion/styled
