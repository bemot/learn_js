function greet() {
    console.log('hi');
}

function writeWord(wordi){
    console.log(wordi);
}

writeWord.client = {name:'Sasha', surname:'Bemotoff'};

console.log(writeWord.client);
