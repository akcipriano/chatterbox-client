// var Messages = {


// };



var Messages = function (username, text, roomname) {
  this.username = username;
  this.text = text;
  if (roomname) {
    this.roomname = roomname;
  }
};

