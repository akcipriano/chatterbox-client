var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// **click function**
// var val = jquery to extract the value
// var user = App.username;
// var user = new Messages(user, val, )
// MessagesView.initialize(user);
// MessagesView.renderMessage(user);