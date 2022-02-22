import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( users =>
                {
                    /// Load and instantiate Chance
                    var chance = require('chance').Chance();

                    for (let i = 0; i < users.length; i++) { 
                        users[i]["username"] = chance.twitter().slice(1);
                        users[i]["hash"] = chance.hash({length: 10});
                        users[i]["color"] = `rgb(${randomColorChan(90,230)},
                            ${randomColorChan(90,128)},
                            ${randomColorChan(220,255)})`;
                    }

                    this.setState({robots: users});
                    console.log(users);
                });  
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
            return (
                <div className="loading">
                    <h2>Loading...</h2>
                </div>
            )
        }
        else
        {
            return (
                <div className="app">
                    <header>
                        <h1>Robobook</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </header>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

function randomColorChan(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default App;