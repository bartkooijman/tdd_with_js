function getSquareMeterPerPackage() {
    return callRestAPIProductMicroservice(123456);
}

function numberOfPackages(length, width) {
    return Math.ceil(length * width / getSquareMeterPerPackage())
}