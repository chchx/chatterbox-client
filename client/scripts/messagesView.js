// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    MessagesView.$chats.on('click', '.chat', MessagesView.handleClick);
  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    messages = messages || Messages._data;
    // console.log(Messages._data);
    messages.forEach((message) => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // console.log(Messages.$chat);
    MessagesView.$chats.append(MessageView.render(message));

  },

  handleClick: function(event) {
    event.stopImmediatePropagation();
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.toggleStatus(event.currentTarget.children[0].innerText);
    // console.table(event.currentTarget);
  }
};