Emails = new Meteor.Collection('emails');

Emails.insert({
  to: 'tony@pardi.com', 
  from:'chad@mccandless.com',
  msg: 'Hey!'
});
