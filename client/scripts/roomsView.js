// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  currentRoom: 'lobby',

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.$chats.html('');
    RoomsView.render();
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
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
    RoomsView.renderRoom('lobby');
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // !FIX
    if(!Rooms._data.has(roomname)) {
      Rooms.add(roomname);
      let template = `<option value="${roomname}">${roomname}</option>`
    RoomsView.$select.append(template);
    }
    let filteredMessages = Messages._data.filter((msg) => {
      return msg.roomname === roomname;
    });
    // console.log(filteredMessages)
    MessagesView.render(filteredMessages);
    // MessagesView.$chats.append(MessageView.render(message));

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // RoomsView.$select.currentTarget.value;
    RoomsView.renderRoom(event.currentTarget.value);
    RoomsView.currentRoom = event.currentTarget.value;

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    event.stopImmediatePropagation();
    // when we click add button, we open up a prompt
    // use addRoom()
    console.log('IM PRESSED');
    var newRoomName = prompt("What's the name of the room?");
    Rooms.add(newRoomName);

    let template = `<option value="${newRoomName}">${newRoomName}</option>`
    RoomsView.$select.append(template);

    RoomsView.renderRoom(newRoomName);
    RoomsView.currentRoom = newRoomName;
    RoomsView.$select.val(RoomsView.currentRoom);

  }
};
