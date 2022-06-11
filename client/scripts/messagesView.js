// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    console.log(Messages._data);
    Messages._data.forEach((message) => MessagesView.renderMessage(message));

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // console.log(Messages.$chat);
    MessagesView.$chats.append(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};