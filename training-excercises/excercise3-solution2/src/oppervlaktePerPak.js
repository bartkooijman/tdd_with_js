const fetch = require("node-fetch")

async function getOppervlaktePerPak(artikelNummer) {
  const product = await fetch(`https://api.gamma.nl/content/1/product?artikelnummer=${artikelNummer}`)
  return product.OppervlaktePerPak
}

module.exports = { getOppervlaktePerPak }