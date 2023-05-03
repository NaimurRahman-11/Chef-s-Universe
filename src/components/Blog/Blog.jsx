import React, { createRef } from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import "./Blog.css";



const Blog = () => {

    const ref = createRef();



    return (
        <div className="App container mt-5 mb-5">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button className="btn btn-primary " onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        <div className="" ref={ref}>
                <h1>Hello Users!</h1>
                <p>Hi this is a simple text to test.</p>
          
            </div>
            
            <div className="container mt-5">
                <h3>1. What is the differences between uncontrolled and controlled components?</h3> <br />
                <p className="justify">In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state. <br /> <br />

A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value. <br /> <br />

                    An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.</p>
                

                <h3 className="mt-5">2. How to validate React props using PropTypes?</h3>
                <p className="justify">React is a JavaScript library used for creating interactive web frontend applications. It is one of the most popular libraries because of its easy-to-use API.

We combine components into an app by passing data from parent components to child components. To do this, we pass data with props. Props are like HTML attributes, but they can contain dynamic data.

                    A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect. <br /> <br />
                
                    We define the FooComponent which takes several props.

And we validate them by setting the propTypes property of the FooComponent component to an object that has the names of the props to validate as the keys. And the corresponding values are the data type of the props.

Since we didn’t specify that the props are required explicitly, they are optional.
                </p>


                <h3 className="mt-5">3. Tell us the difference between nodejs and express js.</h3>
                <p className="justify">Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and its not a programming language. Most of the people are confused and understand its a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. Its used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on. <br /><br />
                
                Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                </p>

                <h3 className="mt-5">4. What is a custom hook, and why will you create a custom hook?</h3>
                <p className="justify">Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. <br /> <br />
                
                    A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS components: <br /> <br />

                    <ul>
                        <li>
                        A custom hook does not require a specific signature.
                        </li>
                        <li>
                        A software developer can choose what argument the custom hook has and what should the argument return.
                        </li>

                        <li>
                        A custom hook always starts with the name ‘use’.
                        </li>
                    </ul>

                    Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and you can search for many open sources where you can get some custom hooks from the library already created by developers.
                
                </p>

            </div>
      </div>
    );
};


export default Blog;