import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-red-400 p-3 text-2xl">
        What are the different ways to manage a state in a React application?
      </h1>
      <h3 className="text-xl p-2">
        There are many different ways to manage a state in a react application.
        There are many libraries to handle states in react applicaions. The Four
        Kinds of React State to Manage Local state. Global state. Server state.
        URL state.Structuring state well can make a difference between a
        component that is pleasant to modify and debug, and one that is a
        constant source of bugs. <br />
        The most important principle is that state shouldn’t contain redundant
        or duplicated information. If there’s some unnecessary state, it’s easy
        to forget to update it, and introduce bugs! Sometimes, you want the
        state of two components to always change together. To do it, remove
        state from both of them, move it to their closest common parent, and
        then pass it down to them via props. This is known as “lifting state
        up”, and it’s one of the most common things you will do writing React
        code.
        <br />
        Every React component has a built-in state. This state is an object
        which stores the property values that belong to a component. State is
        able to keep data from different components in-sync because each state
        update re-renders all relevant components.The built-in way that React
        provides for setting component states is by using setState() and adding
        “local state” to a class. There are several other ways to manage state​s
        in React, including the use of: Hooks React Context API Apollo Link
        State
      </h3>
      <h1 className="text-red-400 p-3 text-2xl">
        How does prototypical inheritance work?
      </h1>
      <h3 className="text-xl p-2">
        The Prototypal Inheritance is a feature in javascript used to add
        methods and properties in objects. It is a method by which an object can
        inherit the properties and methods of another object. Traditionally, in
        order to get and set the [[Prototype]] of an object, we use Object.
        getPrototypeOf and Object.
        <br />
        Every object with its methods and properties contains an internal and
        hidden property known as [[Prototype]]. The Prototypal Inheritance is a
        feature in javascript used to add methods and properties in objects. It
        is a method by which an object can inherit the properties and methods of
        another object. Traditionally, in order to get and set the [[Prototype]]
        of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
        Nowadays, in modern language, it is being set using __proto__.
        <br />
        JavaScript objects are dynamic "bags" of properties (referred to as own
        properties). JavaScript objects have a link to a prototype object. When
        trying to access a property of an object, the property will not only be
        sought on the object but on the prototype of the object, the prototype
        of the prototype, and so on until either a property with a matching name
        is found or the end of the prototype chain is reached.
      </h3>
      <h1 className="text-red-400 p-3 text-2xl">
        What is a unit test? Why should we write unit tests?
      </h1>
      <h3 className="text-xl p-2">
        Unit testing is a way to test units - the smallest components of your
        software, the smallest piece of code. A unit can be a single function.
        The goal is to validate that each unit performs as it should. A unit
        test tests a behavior in isolation to other tests. If the test relies on
        an external system, it is not a Unit Test. Unit Tests should be written
        during the design phase, prior to implementation to prevent defects from
        being deployed to production. They should be run every time the code is
        changed and provide a clear description of the feature being tested.
        <br />
        The main objective of unit testing is to isolate written code to test
        and determine if it works as intended. Unit testing is an important step
        in the development process, because if done correctly, it can help
        detect early flaws in code which may be more difficult to find in later
        testing stages.
        <br />
        Unit Testing helps you with: maintaining your code, catching defects
        introduced due to the code change, lower the potentially harmful impact
        of changes to your code, reusing the code, faster development, lowering
        the cost of fixing defects on lower testing level, a code documentation
        because the Unit Tests describe what your product does.
      </h3>
      <h1 className="text-red-400 p-3 text-2xl">React vs. Angular vs. Vue?</h1>
      <h3 className="text-xl p-2">
        Both - Angular JS and React JS frameworks are used to create web
        interfaces for front end development. Angular is Google's matured and
        advanced JavaScript framework based on TypeScript, whereas Vue is a
        progressive open-source front-end JavaScript framework created by Evan
        You.
        <br />
        Vue provides higher customizability and hence is easier to learn than
        Angular or React. Further, Vue has an overlap with Angular and React
        with respect to their functionality like the use of components. Hence,
        the transition to Vue from either of the two is an easy option.
        <br />
        All three have their perks- Angular is robust and time-tested, React is
        flexible and quick, Vue is simple and high-performing. But the kind of
        framework or library you need for your business depends solely on your
        business demands and the vision you have for your web app. The best way
        to go about this would be to bring a front end development services firm
        on board and explain in detail what you want out of the app.
      </h3>
    </div>
  );
};

export default Blogs;
