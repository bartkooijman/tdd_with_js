const fetch = require("node-fetch")

function getOppervlaktePerPak(artikelNummer) {
  const product = fetch(`https://api.gamma.nl/content/1/product?artikelnummer=${artikelNummer}`)
  return product.OppervlaktePerPak
}

module.exports = { getOppervlaktePerPak }