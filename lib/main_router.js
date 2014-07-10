AppController = RouteController.extend({
    onBeforeAction: function(){
        console.log('router current path' + Router.current().path);
        if(Router.current().path === '/current'){
            Session.set('paypal-state', 'success');
        }
    }
});

Router.map(function(){
    this.route('home',{
        path: '/',
        controller: 'AppController'
    });

});

