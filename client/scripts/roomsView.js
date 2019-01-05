var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(newroom) {
    if (!Rooms.roomNames.includes(newroom)) {
      $('select').append('<option>' + newroom + '</option>');
    }
  }

};