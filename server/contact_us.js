Meteor.methods({
  sendEmail: function (from, name, text){
    check([from, name, text], [String]);
    
    console.log('before send email');
   
    if (this.isSimulation) {
      Session.set('message', 'Sending your message now');
      return;
    }
    
    if(Meteor.isServer){    
      this.unblock();
      Email.send({
        to: 'ksondere@gmail.com',
        from: from,
        subject: name,
        text: text
      });
    }
    console.log('email sent from: ' + name + 'with email address: ' + from);
  }
})