var arr = [
    1,
    false,
    {
        name: 'Nony',
        address: 'Voksanlna, 11'
    },
    function(name) {
        var greeting = "Hello ";
        console.log(greeting + name);
    },
    "hello"
];

console.log(arr);
arr[3](arr[2].name);


