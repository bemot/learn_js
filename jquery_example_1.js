// An object literal
var myFeature = {
    myProperty: "hello",

    myMethod: function() {
        console.log( myFeature.myProperty );
    },

    init: function( settings ) {
        myFeature.settings = settings;
    },

    readSettings: function() {
        console.log( myFeature.settings );
    }
};

myFeature.myProperty === "hello"; // true

myFeature.myMethod(); // "hello"

myFeature.init({
    foo: "bar",
    moo: "restorant",
    boss: 'Sasha'
});

myFeature.readSettings(); // { foo: "bar" }/ An object literal

console.log(myFeature);
