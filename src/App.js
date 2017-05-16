import React, { Component } from 'react';
import {Form} from "./components/form";
import {MessageList} from "./components/MessageList";
import {UserProfile} from "./components/UserProfile";

import './App.css';

const updateState = (name, value) => state => ({
  ...state,
  [name]: value
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Guest',
      picture: 'https://hackages.io/static/media/m041074.a59d6a20.jpg',
      message: ''
    }
  }

  update = ({target: {name, value}}) => {
    this.setState(updateState(name, value));
  };

  sendMessage = () => {

  };

  render() {
    return (
      <div className="app-container">
        <UserProfile
          profile={{...this.state}}
          update={this.update}/>
        <p>
          Awesome chat!
        </p>
        <MessageList />
        <Form messageValue={this.state.message} update={this.update} sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
