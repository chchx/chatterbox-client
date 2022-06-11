// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.

   // render method acts like a function that takes an object
  // and gives _.template access to {username, text, roomname}

  render: _.template(`
      <div class="chat">
        <div class="username"> <%= username %> </div>
        <div> <%= text %> </div>
      </div>
    `)

};