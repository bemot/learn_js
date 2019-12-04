// we are imitating jQuery here
// we may use jQuery or $ sign
(function(global, $) {

    //we will expose Themes function
    var Themes = function(theme,language) {
        return new Themes.init(theme, language);
        }

    // inside context variables (developer cannot change)

    var supportedLangs = ['en', 'es', 'ua'];
    var supportedThemes = ['Theme1',
                           'Theme2'
                        ];


        // we will put all methods to prototype HERE!!!
    Themes.prototype = {

       languages : {
           en: 'English',
           es: 'Spanish',
           ua: 'Ukrainian'
        },

    Theme1 : {
        themeName: 'Theme1',
        color1: 'green',
        color2: 'red'
    },

    Theme2 : {
        themeName: 'Theme2',
        color1: 'blue',
        color2: 'white'
    },


        validate: function() {
            if (supportedThemes.indexOf(this.theme) === -1){
                throw "invalid theme";
            }
               if(supportedLangs.indexOf(this.language) === -1){
                throw "Invalid language";
            }
        },
        //we are returning object here (bobik)
		//never use functioon eval() ha-ha-ha
        whatTheme: function(){
        	return eval('this.'+this.theme);
        },

        whatLanguage: function() {
          return this.language;
    } };




    Themes.init = function(theme, language) {
            var self = this;
            self.theme = theme || 'firstTheme';
            self.language = language || 'en';

            self.validate();

        }

        // creating prototype chain
    Themes.init.prototype = Themes.prototype;

    global.Themes = global.T$ = Themes;

}(window, $)); //we may use jQuery or $-sign

//it is better to put methods in prototype to
// save some memory
//

