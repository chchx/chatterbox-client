// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // setInterval( () => {
    // }, 3000);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    $('.refresh').on('click', () => {
      console.log('eawgf');
      Messages._data = [];
      MessagesView.$chats.html('');
      App.startSpinner();
      App.fetch(App.stopSpinner);
    });
  },

  fetch: function (callback = () => { }) {
    Parse.readAll( (data) => {
      // console.log('error:', err);
      // examine the response from the server request:
      // console.log(data);

      let regex = /<.+\/*>/g;
      // data.forEach( (msg) => {
      //   ['text', 'username', 'roomname'].forEach( (key) => {
      //     if (typeof msg[key] !== undefined && msg[key] !== null && msg[key] !== "") {
      //       msg[key] = msg[key].replace(regex, 'NICE TRY');
      //     }
      //   })
      // })
      for(let msg of data) {
        Messages._data.push(msg);
      }

      //   //   // TODO: Use the data to update Messages and Rooms
      //   //   // and re-render the corresponding views.
      //   //   // MessagesView.initialize();
      // });
      console.log(data);
      console.log('MESSAGES: ', Messages._data)

      RoomsView.initialize();
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
