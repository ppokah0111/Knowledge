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