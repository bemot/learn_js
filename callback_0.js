function sayHiLater(){
    // here we are using closure
    var greeting = 'Hi';

    setTimeout(function(){
        console.log(greeting);
        },3000);
}

sayHiLater();



tellMeWhenDone(function() {
    console.log('I am done!!!');
});

tellMeWhenDone(function() {
    console.log('I am done again!!!');
});






