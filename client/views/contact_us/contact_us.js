(function(){
  function parseForm(form){
    var fields;
    var fieldArray = $(form).serializeArray();
    
    console.log("fieldArray: " + fieldArray);
    
    _.each(fieldArray, function(field){
      fields[field.name] = field.value;
    });
    
    console.log("fields: " + fields);
    return fields;
  }
    
  Template.contactUs.events = {
    "submit" : function (eventl, template) {
      event.preventDefault();
      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var msg = document.getElementById("msg");
      //var form = template.firstNode;                
      //console.log('form: ' + form);
      //var fields = parseForm(form);
      
      console.log("name: " + name.value + " email: " + email.value + " msg: " + msg.value);
      Meteor.call("sendEmail", email.value, name.value, msg.value, function(err){
        if(err)
        {
          Session.set("message", "We're sorry, an error occured. Please try to contact us directly or try again later");
          console.log("error: " + err);
        } else {
          Session.set("message", "Thank you for contacting us!");         
          Meteor.setTimeout(3000, function(){
              Session.set("message", ""); 
              console.log("timeout occurred and message set to ''");
          });
        }
      });            
    }
  }
  
  Template.contactUs.helpers({
    message: function () {
      return Session.get("message") || "";
    }
  });
}());