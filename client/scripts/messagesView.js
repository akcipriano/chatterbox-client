var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
    });
    console.log('MessagesView.initialize');
  },

  // Parse.readAll((data) => {
  //   // examine the response from the server request:
  //   console.log(data);

  //   callback();
  // })

  renderMessage: function(message) {
    var msg = MessageView.render(message);
    var userInfo = {
      $username: $('.username'),
      username: message.username,
      isFriend: false
    };

    $('#chats').append(msg);
    if (!(_.pluck(Friends.user, 'username').includes(message.username))) {
      Friends.user.push(userInfo);
    }
  }
};

var user = {
  username: 'shawndrost',
  text: 'howdy',
  roomname: '4chan'
};

// MessagesView.initialize(user);
MessagesView.renderMessage(user);


// [
//   {
//   username: bob,
//   isFriend: false
//   }
// ]
// var user = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };
// MessagesView.renderMessage(user);