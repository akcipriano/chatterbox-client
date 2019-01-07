var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {

    // Stop the browser from submitting the form
    event.preventDefault();

    var userMsg = {};
    userMsg.username = App.username;
    userMsg.text = $('#message').val();
    userMsg.roomname = '';

    if (theRoom) {
      userMsg.roomname = theRoom;
    }

    Parse.create(userMsg, () => {

      $('#chats').empty();
      MessagesView.initialize();
    });

    setTimeout(function () {
      if (theRoom === '' || !theRoom) {
        $('.chat').show();
      } else {
        $('.chat').hide();
        $('.' + theRoom).show();
      }
    }, 500);
    console.log('settimeoutdone');

    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};


