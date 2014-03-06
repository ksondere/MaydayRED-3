Meteor.startup(function () {
    $(".scroll-link").click(function () {
        var ScrollOffset = $(this).attr('data-soffset');
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - ScrollOffset + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

    var navigation = responsiveNav("#nav", { // Selector: The ID of the wrapper
        animate: true, // Boolean: Use CSS3 transitions, true or false
        transition: 400, // Integer: Speed of the transition, in milliseconds
        label: "Menu", // String: Label for the navigation toggle
        insert: "after", // String: Insert the toggle before or after the navigation
        customToggle: "", // Selector: Specify the ID of a custom toggle
        openPos: "relative", // String: Position of the opened nav, relative or static
        jsClass: "js", // String: 'JS enabled' class which is added to <html> el
        init: function () {
        }, // Function: Init callback
        open: function () {
        }, // Function: Open callback
        close: function () {
        } // Function: Close callback
    });

    Session.set("message", "");
});
