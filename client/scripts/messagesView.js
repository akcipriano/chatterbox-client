var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].username && data.results[i].text) {
          MessagesView.renderMessage(data.results[i]);
        }
      }
    });
  },

  renderMessage: function(message) {
    if ((message.text.includes('<') && message.text.includes('>')) || (message.text.includes('{') && message.text.includes('}'))) {
      message.text = encodeURI(message.text);
    }

    var msg = MessageView.render(message);

    MessagesView.$chats.append(msg);

    var userInfo = {
      $username: $('.username'),
      username: message.username,
      isFriend: false
    };

    if (!(_.pluck(Friends.user, 'username').includes(message.username))) {
      Friends.user.push(userInfo);
    }
  }
};

//Refresh Button
$(document).ready(function() {
  $('button').click(function() {
    $('#chats').empty();
    MessagesView.initialize();

    setTimeout(function () {
      if (theRoom === '' || !theRoom) {
        $('.chat').show();
      } else {
        $('.chat').hide();
        $('.' + theRoom).show();
      }
    }, 500);
  });
});