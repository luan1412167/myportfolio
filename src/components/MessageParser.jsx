import React from 'react';

class MessageParser extends React.Component {
  constructor(actionProvider) {
    super();
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    else{
      console.log("typed message", message);
      this.actionProvider.chat(message);
    }
  }
}

export default MessageParser;