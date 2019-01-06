var Rooms = {
  roomNames: [],
  add: function(room) {
    if (!this.roomNames.includes(room)) {
      this.roomNames.push(room);
    }
  }
};

$(document).ready(function() {
  $('#addroom').click(function() {
    var roomName = $('#newroom').val();

    RoomsView.renderRoom(roomName);
    Rooms.add(roomName);
    $('#newroom').val('');

  });
});

var theRoom;

$(document).ready(function() {
  $('select').change(function() {
    theRoom = $(this).children('option:selected').val();
    alert (theRoom);
  });
});

