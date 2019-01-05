var Friends = {
  user: [],
  toggleStatus: function (obj) {
    if (obj.isFriend === false) {
      obj.isFriend = true;
    } else {
      obj.isFriend = false;
    }
  }
};

// toggleStatus: {
//   called: false,
//   isFrnd: function (obj) {
//     obj.isFriend = true;
//     toggleStatus.called = true;
//     if (obj.isFriend === false) {
//       obj.isFriend = true;
//     } else {
//       obj.isFriend = false;
//     }
//   }
// }

$(document).ready(function() {
  $('.username').click(function() {

    var name = $('.username').text();

    for (var i = 0; i < Friends.user.length; i++) {
      if (Friends.user[i].username === name) {
        Friends.toggleStatus(Friends.user[i]);
        $('.text').css({'color': 'blue'});
      }
    }
  });
});



// var MessagesView = {

//   $chats: $('#chats'),

//   initialize: function() {
//   },

// [
//   {
//   username: bob,
//   isFriend: false
//   }
// ]

