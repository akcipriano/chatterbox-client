var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      console.log('outsideLoop:', data);
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].username && data.results[i].text) {
          console.log('insideLoop:', data.results[i]);
          MessagesView.renderMessage(data.results[i]);
        }
      }
    });

    console.log('MessagesView.initialize');
  },

  // Parse.readAll((data) => {
  //   // examine the response from the server request:
  //   console.log(data);

  //   callback();
  // })

  renderMessage: function(message) {
    if ((message.text.includes('<') && message.text.includes('>')) || (message.text.includes('{') && message.text.includes('}'))) {
      message.text = encodeURI(message.text);
    }
    // message.text = encodeURI(message.text);
    var msg = MessageView.render(message);
    // var userInfo = {
    //   $username: $('.username'),
    //   username: message.username,
    //   isFriend: false
    // };

    $('#chats').append(msg);

    // $('#chats').append(msg);
    // if (!(_.pluck(Friends.user, 'username').includes(message.username))) {
    //   Friends.user.push(userInfo);
    // }
  }
};

// var user = {
//   username: 'shawndrost',
//   text: 'howdy',
//   roomname: '4chan'
// };

// MessagesView.initialize(user);
// MessagesView.renderMessage(user);

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