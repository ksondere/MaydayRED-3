Template.contactUs.events = {
  'keydown input#submit' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var msg = document.getElementById('msg');

      Meteor.call('sendEmail', email, name, msg);
      Meteor.call('writeDb', email, name, msg);
    }
  }
}