var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    Parse.readAll((data) => {
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].roomname) {
          RoomsView.renderRoom(data.results[i].roomname);
          Rooms.add(data.results[i].roomname);
        }
      }
    });
  },

  renderRoom: function(newroom) {
    if ((newroom.includes('<') && newroom.includes('>')) || (newroom.includes('{') && newroom.includes('}'))) {
      message.text = encodeURI(message.text);
    }

    if (!Rooms.roomNames.includes(newroom)) {
      $('select').append('<option>' + newroom + '</option>');
    }
  }

};