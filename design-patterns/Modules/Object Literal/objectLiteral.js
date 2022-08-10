const myFloorCalculatorObjectLiteralModule = {
  squareMetersPerPackage: 2.69,
  calculateNumberOfPackages(length, width) {
    return Math.ceil(length*width/this.squareMetersPerPackage)
  }
}

console.log(myFloorCalculatorObjectLiteralModule.squareMetersPerPackage) //not perfect encapsulation
console.log(myFloorCalculatorObjectLiteralModule.calculateNumberOfPackages(4,5))