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

    // console.log('click!');

    Parse.create(userMsg, () => {

      $('#chats').empty();
      MessagesView.initialize();
    });

    $('#message').val('');
  },



  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};


