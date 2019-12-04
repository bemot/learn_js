// we are imitating jQuery here
// we may use jQuery or $ sign
(function(global, $) {

    //we will expose Greetr function
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
        }

    // inside context variables (developer cannot change)

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

        // we will put all methods to prototype HERE!!!
    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if(supportedLangs.indexOf(this.language) === =1) {
                throw "Invalid language";
            }
        },

        greetings: function() {
            return greetings[this.language] + ' ' + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        }

    };




    Greetr.init = function(firstName, lastName, language) {
            var self = this;
            self.firstName = firstName || '';
            self.lastName = lastName || '';
            self.language = language || 'en';
        }

        // creating prototype chain
    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, $)); //we may use jQuery or $-sign

//it is better to put methods in prototype to
// save some memory
//

