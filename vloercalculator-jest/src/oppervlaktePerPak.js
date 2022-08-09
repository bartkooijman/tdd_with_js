const fetch = require("node-fetch")

function getOppervlaktePerPak() {
  const product = fetch("https://api.gamma.nl/content/1/dossiers")
  return product.OppervlaktePerPak
}

module.exports = { getOppervlaktePerPak }