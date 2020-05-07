import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {

    state = {
        persons: [
            { name: "Nis", age: 29 },
            { name: "Kshitja", age: 22},
            { name: "Sarika", age: 29}
        ],
        otherState: 'some value'
    };


    switchNameHandler = () => {

        // console.log("was clicked!");
        this.state.persons[0].name = "Nishant";

        this.setState({

            persons: [
                { name: "Nishant", age: 29 },
                { name: "Kshitja", age: 22},
                { name: "Sarika", age: 29}
            ],

        })

    };


    render() {
      return (

          <div className="App">

              <h1> Hi, I'm a React Developer</h1>
              <p>This is really working!</p>

              <button onClick={this.switchNameHandler}> Switch Name </button>

              <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
              <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} > My Hobbies: Racing </Person>
              <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
          </div>
      );

      // return (
      //     React.createElement('div', {className : "App"},
      //         React.createElement( 'h1', null, 'Hi, I\'m a React Developer'))
      // );

  }
}



export default App;
