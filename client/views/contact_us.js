Template.contactUs.events = {
  'submit' : function (eventl, template) {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    
    console.log('name: ' + name.value + ' email: ' + email.value + ' msg: ' + msg.value);
    Meteor.call('sendEmail', email.value, name.value, msg.value);
    event.preventDefault();
  }
}