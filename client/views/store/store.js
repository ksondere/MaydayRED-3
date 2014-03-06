(function(){
Template.store.created = function(){
  simpleCart({
    checkout: {
      type: "PayPal",
      email: "ksondere@gmail.com",
      sandbox: true
    }
  });
}
}());
