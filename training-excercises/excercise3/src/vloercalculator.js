const { getOppervlaktePerPak } = require ("./oppervlaktePerPak")

async function aantalPakketten(lengte, breedte, productNummer) {
  const oppervlaktePerPak = await getOppervlaktePerPak(productNummer)
  return Math.ceil(lengte * breedte / oppervlaktePerPak)
}

module.exports = { aantalPakketten }