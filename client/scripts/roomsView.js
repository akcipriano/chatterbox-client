var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(newroom) {
    $('select').append('<option>' + newroom + '</option>');
  }

};
