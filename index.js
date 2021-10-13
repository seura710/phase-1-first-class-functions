function receivesAFunction(someFunction) {
    someFunction();
}

function returnsANamedFunction() {
    return function namedFunction() {};
}

function returnsAnAnonymousFunction() {
    return function() {};
}