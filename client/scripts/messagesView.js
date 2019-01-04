var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    var msg = MessageView.render(message);
    $('#chats').append(msg);
  }

};


// var user = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };
// MessagesView.renderMessage(user);