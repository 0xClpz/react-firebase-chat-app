import React, { Component } from 'react';
import firebase from "firebase";
import {Form} from "./components/form";
import {MessageList} from "./components/MessageList";
import {UserProfile} from "./components/UserProfile";

import './App.css';
import {Login} from "./components/Login";

const updateState = (name, value) => state => ({
  ...state,
  [name]: value
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayName: 'Guest',
      photoURL: 'https://hackages.io/static/media/m041074.a59d6a20.jpg',
      message: '',
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      this.setState(state => ({
        loggedIn: !!user,
        displayName: user ? user.displayName : state.displayName,
        photoURL: user ? user.photoURL : state.photoURL
      }));
    });
  }

  update = ({target: {name, value}}) => {
    this.setState(updateState(name, value));
  };

  sendMessage = () => {
    const {displayName: name, photoURL: picture, message} = this.state;
    const createdAt = Date.now();
    firebase.database().ref('/messages').push({name, picture, message, createdAt});
    this.setState(state => ({
      ...state,
      message: '',
    }));
  };

  render() {
    const {displayName, photoURL, message, loggedIn} = this.state;
    return (
      <div className="app-container">
        {!loggedIn ?
          <Login />
          :
          <div>
            <UserProfile
              profile={{displayName, photoURL}}
              update={this.update}/>
            <MessageList
              messages={this.state.messages} />
            <Form
              messageValue={message}
              update={this.update}
              sendMessage={this.sendMessage} />
          </div>
        }
      </div>
    );
  }
}

export default App;
