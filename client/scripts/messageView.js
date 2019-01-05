var MessageView = {

  render: _.template(
    '<div class="chat">' +
      '<div class="username">' + '<%= username %>' + '</div>' +
      '<div class="text">' + '<%= text %>' + '</div>' +
    '</div>'
  )

};


// "<%= movieTitle %>" +

/*

var user = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

*/

// $(document).ready(function() {
//   $('.username').click(function() {

//     var name = $('.username').text();

//     for (var i = 0; i < Friends.user.length; i++) {
//       if (Friends.user[i].username === name) {
//         Friends.toggleStatus(Friends.user[i]);
//         $('.text').css({'color': 'blue'});
//       }
//     }

//   });
// });

/*

$(document).ready(function() {
  $("#clicker").click(function () {
    alert("Hello!");
    $(".hide_div").hide();
  });
});

*/