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

$(document).ready(function() {
  $('select').change(function() {
    var theRoom = $(this).children('option:selected').val();
    alert (theRoom);
  });
});

