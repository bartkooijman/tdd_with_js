describe("Product price calculator test suite", function () {
  it("Calculate consumer retail price if product is sold in store", function () {
    const product = {
      soldInStore: true,
      purchasePrice: 100,
    };
    expect(calculatePrices(product)).toEqual(
      jasmine.objectContaining({
        retailPrice: 125,
      })
    );
  });

  it("Calculate consumer retail price if product is sold in store but with different purchase price", function () {
    const product = {
      soldInStore: true,
      purchasePrice: 200,
    };
    expect(calculatePrices(product)).toEqual(
      jasmine.objectContaining({
        retailPrice: 250,
      })
    );
  });

  it("Calculate consumer retail price if product is not sold in store", function () {
    const product = {
      soldInStore: false,
      purchasePrice: 200,
    };
    expect(calculatePrices(product)).toEqual(
      jasmine.objectContaining({
        retailPrice: undefined,
      })
    );
  });

  it("Undefined product", function () {
    const product = undefined;
    expect(calculatePrices(product)).toBe(undefined);
  });

  it("Calculate 20% promo price from retail price", () => {
    const product = {
      soldInStore: true,
      purchasePrice: 100,
    };
    expect(calculatePrices(product)).toEqual(
      jasmine.objectContaining({
        retailPromotionPrice: 150,
      })
    );
  });

  it("Calculate 15% margin for b2b if 100 products or more", () => {
    const product = {
      soldToBusiness: true,
      purchasePrice: 100
    };
    expect(calculatePrices(product)).toEqual(
      jasmine.objectContaining({
        b2bPrice100orMore: 115,
      })
    );
  });

  it("Calculate 15% margin for b2b if 100 products or more", () => {
    const product = {
      soldToBusiness: true,
      purchasePrice: 200
    };
    expect(calculatePrices(product)).toEqual(
      jasmine.objectContaining({
        b2bPrice100orMore: 230,
      })
    );
  });

});

//calculate price based on product info
// V purchase price calculate consumer retail price with 25% margin
// if product can be sold in store,
// V 20% promo price from retail price
// * if the product is b2b product 15% margin for 100 product or more
// * 10% margin or more for b2b customer that buy 1000 or more
// Build a component in js that provides the calculation functionality
