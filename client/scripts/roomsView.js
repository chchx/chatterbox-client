// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.renderRoom('lobby');
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // create a roomList string;
    Messages._data.forEach( (msg) => {
      // console.log(msg.roomname);
      if (!!msg.roomname) {
        Rooms._data.add(msg.roomname);
        console.log(Rooms._data);
      }
    });
    // loop through room set and concat <option value="item">item</option>

    for(let item of Rooms._data) {
      let template = `<option value="${item}">${item}</option>`
      RoomsView.$select.append(template);
      // console.log()
    };
    // to the roomList string
    // append roomList string in $select
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    let filteredMessages = Messages._data.filter((msg) => {
      return msg.roomname === roomname;
    });
    console.log(filteredMessages)
    // MessagesView.$chats.append(MessageView.render(message));

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

    // when we click add button, we open up a prompt
    // use addRoom()
    var newRoomName = prompt("What's the name of the room?");
    Rooms.addRoom(newRoomName);

    let template = `<option value="${newRoomName}">${newRoomName}</option>`
    RoomsView.$select.append(template);

    console.log(Rooms._data);
    RoomsView.renderRoom(newRoomName);
  }
};
