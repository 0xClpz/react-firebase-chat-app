import React, { Component } from 'react';
import firebase from "firebase";
import {Form} from "./components/form";
import {MessageList} from "./components/MessageList";
import {UserProfile} from "./components/UserProfile";

import './App.css';

const updateState = (name, value) => state => ({
  ...state,
  [name]: value
});

const ObjectsToArray = obj =>
  Object.keys(obj)
    .map(id => ({id, ...obj[id]}));

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Guest',
      picture: 'https://hackages.io/static/media/m041074.a59d6a20.jpg',
      message: '',
      messages: []
    }
  }

  componentDidMount(){
    firebase.database().ref('/messages').on('value', snapshot => {
      const messages =
        [snapshot.val() || {}]
          .map(ObjectsToArray)[0];
      this.setState(state => ({...state, messages}));
    });
  }

  update = ({target: {name, value}}) => {
    this.setState(updateState(name, value));
  };

  sendMessage = () => {
    const {name, picture, message} = this.state;
    const createdAt = Date.now();
    firebase.database().ref('/messages').push({name, picture, message, createdAt});
    this.setState(state => ({
      ...state,
      message: '',
    }));
  };

  render() {
    const {name, picture, message} = this.state;
    return (
      <div className="app-container">
        <UserProfile
          profile={{name, picture}}
          update={this.update}/>
        <MessageList
          messages={this.state.messages} />
        <Form
          messageValue={message}
          update={this.update}
          sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
