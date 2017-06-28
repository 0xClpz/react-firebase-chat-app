import React, {Component} from 'react';
import firebase from "firebase";
import {Message} from "./Message";

const ObjectsToArray = obj =>
  Object.keys(obj)
    .map(id => ({id, ...obj[id]}));

export class MessageList extends Component {
  state = {
    messages: []
  };

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      this.setState(state => ({
        loggedIn: !!user,
        displayName: user ? user.displayName : state.displayName,
        photoURL: user ? user.photoURL : state.photoURL
      }));
    });
    firebase.database().ref('/messages').on('value', snapshot => {
      const messages =
        [snapshot.val() || {}]
          .map(ObjectsToArray)[0];
      this.setState(state => ({...state, messages}));
    });
  }

  componentWillUnmount(){
    firebase.database().ref('/messages').off();
  }

  render(){
    const {messages} = this.state;
    return (
      <div className="message-list">
        {messages.map(message => <Message key={message.id} data={message} />)}
      </div>
    );
  }
}