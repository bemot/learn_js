function greet (firstname, lastname, language) {
    language = language || 'en';
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('----------');
}

greet();
greet('Sasha');
greet('Sasha', 'Bemotoff', 'ua');
greet('Sasha', 'Bemotoff', 'ua');
