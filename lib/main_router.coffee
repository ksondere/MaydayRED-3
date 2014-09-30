scroll = ->
    console.log 'hey'
    ScrollOffset = $(this).attr('data-soffset')
    $("html, body").animate
        scrollTop: $($(this).attr("href")).offset().top - ScrollOffset + "px",
        duration: 1500
        easing: "swing"

Router.configure
    load: ->
        $('html, body').animate({scrollTop: 0}, 400)
        $('content').hide().fadeIn(1000)

Router.map ->
    @route 'videos',
        path: '#videos'
        action: scroll

    @route 'band',
        path: '#band'
        action: scroll

    @route 'store',
        path: '#store'
        action: scroll

    @route 'contact_us',
        path: '#contact-us'
        action: ->
            console.log 'contact_us action called'

    @route 'success',
        path: '/success',
        action: ->
            simpleCart.each (item, x) ->
                console.log "item: #{item}"

            simpleCart.empty()

    @route 'cancel',
        path: '/cancel',
        action: ->
            console.log "quantity: #{simpleCart.quantity()}"
            simpleCart.each (item, x) ->
                console.log "item: #{item}"

            simpleCart.empty()



