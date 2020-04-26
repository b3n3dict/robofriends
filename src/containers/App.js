import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';


class App extends Component{
    constructor(){
        super()
        this.state={
            robot :[],
            searchField:''
    }
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(users=>{this.setState({robot:users})});
}
onSearchChange = (event)=>{ 
    this.setState({searchField: event.target.value})
}
  render(){
    const{robot,searchField}=this.state
        const filteredRobots = robot.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robot.length ?
        <div className="pad">
            <h1 className="tc dim">LOADING..</h1> </div> :
              (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robot={filteredRobots}/>
                </Scroll>
            
            </div>
           );
    }
    }

export default App;