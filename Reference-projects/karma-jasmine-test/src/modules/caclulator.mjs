/*
This is an example of an ES6 module. ES6 modules are supported by most 
versions of the mainstream browsers. Modules enable you to only expose
the methods and/or objects relevant to the consumer of the module. Everything
else in the module is hidden from the consumer, or as we like to call it
encapsulated.

This module is intended to become a calculator module providing calculation
functionality either through exposing methods or objects. So far it has only
been exposing an add function (exposing the function using the export key-
    word)
*/

function add(x, y) {
    return x + y;
}

export { add }