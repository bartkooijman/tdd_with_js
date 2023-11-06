const { getOppervlaktePerPak } = require ("./oppervlaktePerPak")

async function aantalPakketten(lengte, breedte, productNummer) {
  const oppervlakteUitPak = await getOppervlaktePerPak(productNummer)
  return Math.ceil(lengte * breedte / oppervlakteUitPak)
}

module.exports = { aantalPakketten }