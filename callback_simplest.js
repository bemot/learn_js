//callback function
//

function tellMeWhenDone(callback) {

    var a =10;
    var b = 24; //some work

    callback();
}



tellMeWhenDone(function(){
    console.log('I am done!');
});

tellMeWhenDone(function(){
    console.log('I am done again!');
});


