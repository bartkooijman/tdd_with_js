const pi = 3.14

class Divider {
    constructor() { };

    myToBeSpiedDivideFunction(x, y) {
        return x / y
    }

    divide(x, y) {
        return `${x} gedeeld door ${y} is ${this.myToBeSpiedDivideFunction(x, y)}`
    }
}

const subtractor = {
    myToBeSpiedSubtractFunction: (x, y) => {
        return x - y
    },
    subtract: (x, y) => {
        return `${x} minus ${y} is ${subtractor.myToBeSpiedSubtractFunction(x, y)}`
    }
}