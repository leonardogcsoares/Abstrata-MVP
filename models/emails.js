/**
 * Created by leonardogcsoares on 3/23/2016.
 */
Meteor.methods({
    addEmail: function (username, userEmail, userMessage) {

        this.unblock();

        if (Meteor.isServer && userEmail) {
            Email.send({
                to: 'leonardogcsoares93@gmail.com', // Change to whatever @abstrata email we decide.
                from: 'leonardogcsoares93@gmail.com',
                subject: 'Abstrata - New User Sign-Up ',
                text: 'New user for email list:  ' + username
                    + '\nUser email:  ' + userEmail +
                    '\nUser message:  ' + userMessage
            });
        }
    }
});