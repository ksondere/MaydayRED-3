Meteor.startup(function(){
  process.env.MAIL_URL = 'smtp://postmaster%40maydayred.com:ninja@smtp.mailgun.org:587';
})