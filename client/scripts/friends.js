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

$('#chats').on('click', '.username', function() {
  var clickedUser = this.innerText;

  for (var i = 0; i < Friends.user.length; i++) {
    if (Friends.user[i].username === clickedUser) {
      if (Friends.user[i].isFriend === false) {
        Friends.toggleStatus(Friends.user[i]);
        $('.' + clickedUser).next().css({'color': 'blue'});
      } else {
        Friends.toggleStatus(Friends.user[i]);
        $('.' + clickedUser).next().css({'color': 'black'});
      }
    }
  }
});