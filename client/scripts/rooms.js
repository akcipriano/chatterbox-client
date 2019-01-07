var Rooms = {
  roomNames: [],
  add: function(room) {
    if (!this.roomNames.includes(room)) {
      this.roomNames.push(room);
    }
  }
};

$(document).ready(function() {
  $('#rooms').on('click', 'button', function() {

    var newRoomName = window.prompt('Enter New Room Name');

    var serverRoom = {
      roomname: newRoomName       // NEW obj
    };

    Parse.create(serverRoom);  // NEW
    RoomsView.renderRoom(newRoomName);

    Rooms.add(newRoomName);

  });
});

var theRoom;

$(document).ready(function() {
  $('select').change(function() {
    theRoom = $(this).children('option:selected').val().split(' ').join('');

    if (theRoom === '' || !theRoom) {       // || !theRoom is NEW
      $('.chat').show();
    } else {
      $('.chat').hide();
      $('.' + theRoom).show();
    }
  });
});
