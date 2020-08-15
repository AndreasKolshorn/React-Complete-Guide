import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';      // Person should be in upper case. Lower case reserved with lower case. ..C

class App extends Component 
{
   // app = props => {
     state = {
      persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Steph', age: 16}
      ],
      otherState: 'Some other value'
    };
   // ;

switchNameHandler = () => {       //using es6 function vs es5 where you need a this.
   // DONT" DO this:  this.state.person[0].name = 'Maxmilian';
   // Rather do this:   Merges below with state. SetState and props two things that change DOM
  this.setState( { persons: [
    {name: 'Maximil', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Steph', age: 24}
  ]
});
 
  // console.log('Was Clicked')
};

// Do not use () below on onClick or it calls as a function. We want a reference
// In regular JS its onclick vs here onClick

render() {
   return (
      <div className="App">
       <h1>Hi, I'm aaaaa react app</h1>
       <p>This is really working.!</p>

       <button onClick={this.switchNameHandler}>Switch Name</button>    
                                                                        
       <Person name= {this.state.persons[0].name}  age={this.state.persons[0].age} />
       <Person name= {this.state.persons[1].name}  age={this.state.persons[1].age} />
       <Person name= {this.state.persons[2].name}  age={this.state.persons[2].age} />Likes: Racing<Person/>
      </div>
    ); 
    //return React.createElement ('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }

};


export default App;
