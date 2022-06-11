// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Set(),

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  toggleStatus: (person) => {
    if (App.username !== person && !Friends._data.has(person)) {
      Friends._data.add(person);
      console.log('added')
    } else if(App.username !== person && Friends._data.has(person)){
      Friends._data.delete(person);
      console.log('removed')
    }
  }
};