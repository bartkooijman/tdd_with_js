exports.numberOfPackages = function (length, width, squareMetersPerPackage) {
  return Math.ceil((length * width) / squareMetersPerPackage);
};
