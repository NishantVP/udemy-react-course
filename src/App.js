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


    switchNameHandler = (newName) => {

        this.setState({
            persons: [
                { name: newName, age: 29 },
                { name: "Kshitja", age: 22},
                { name: "Sarika", age: 29}
            ],
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: "Nis", age: 29 },
                { name: event.target.value, age: 22},
                { name: "Sarika", age: 29}
            ],
        })

    }


    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (

            <div className="App">

                <h1> Hi, I'm a React Developer</h1>
                <p>This is really working!</p>


                <button
                    style={style}
                    onClick = { this.switchNameHandler.bind(this,"Nishant") }> Switch Name
                </button>

                <Person
                    name = {this.state.persons[0].name}
                    age = {this.state.persons[0].age}
                />

                <Person
                    name = {this.state.persons[1].name}
                    age = {this.state.persons[1].age}
                    click = {this.switchNameHandler.bind(this,"Nis!")}
                    changed = {this.nameChangedHandler}
                >

                    My Hobbies: Racing
                </Person>

                <Person
                    name = {this.state.persons[2].name} age = {this.state.persons[2].age}
                />

            </div>
        );
    }
}



export default App;
