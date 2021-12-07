function calculatePrices(product) {
  if (product) {
    product.retailPrice = product.soldInStore ? product.purchasePrice * 1.25 : undefined
    product.retailPromotionPrice = product.retailPrice ? product.retailPrice * 1.20 : undefined
    product.b2bPrice100orMore = Math.round(product.purchasePrice * 1.15)
    return product
  } else {
    return undefined
  }
}