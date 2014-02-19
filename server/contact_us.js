Meteor.methods({
  sendEmail: function (from, name, text){
    check([from, name, text], [String]);
    
    this.unblock();
    Email.send({
      to: 'ksondere@gmail.com',
      from: from,
      subject: name,
      text: text
    });
  },
  writeDb: function (from, name, text){
    Emails.insert({ 
      from: from,
      name: name,
      text: text
    })
  }
})