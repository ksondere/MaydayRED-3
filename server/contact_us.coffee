Meteor.methods
    sendEmail: (from, name, text) ->
        check([from, name, text], [String])

        console.log('before send email')

        this.unblock()
        Email.send
            to: 'ksondere@gmail.com'
            from: from
            subject: name
            text: text

        console.log('email sent from: ' + name + 'with email address: ' + from)
