Router.map ->
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

