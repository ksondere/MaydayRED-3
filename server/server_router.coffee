Router.map ->
    @route 'notification',
        action: ->
            for k, v of @request.body
                console.log "bk: #{k}, bv: #{v}"
            console.log "request type: #{typeof @request}"
            @response.writeHead 200, {'Content-Type': 'text/html'}
            @response.end 'OK'
            HTTP.post 'https://www.sandbox.paypal.com/cgi-bin/webscr', @request, (error, response) ->
                console.log "error: #{error}"
                console.log "response: #{response}"
                for k, v of response
                    console.log "response bk: #{k}, bv: #{v}"

        path: '/notification'
        where: 'server'

