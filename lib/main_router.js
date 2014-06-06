/**
 * Created by ksondere on 5/30/14.
 */

Router.map(function(){
    this.route('videos',{
        path: '/'
    });

    this.route('store');

    this.route('success', {
        template: 'store',
        onBeforeAction: function(pause){
            console.log("got it!")
        }
    });

    this.route('cancel');
});
