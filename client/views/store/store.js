(function () {
    Template.store.created = function () {
        simpleCart({
            checkout: {
                type: "PayPal",
                email: "ksondere-developer@gmail.com",
                sandbox: true,
                success: "http://discover-meteor-44212.usw1.nitrousbox.com/success",
                cancel: "http://discover-meteor-44212.usw1.nitrousbox.com/cancel"
            }
        });
    }
    
    Template.store.helpers()({
        paypalReturn: Session.get('paypal-state') 
    })
}());

