var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();

function log(a) {
    a();
}

log(function(){
    console.log("hi again!");
});

log(function(){
    console.log(Math.PI);
})
