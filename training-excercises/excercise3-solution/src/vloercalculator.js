const { getOppervlaktePerPak } = require ("./oppervlaktePerPak")

async function aantalPakketten(lengte, breedte, productNummer, oppervlaktePerPak = getOppervlaktePerPak()) {
  const oppervlakteUitPak = await oppervlaktePerPak(productNummer)
  return Math.ceil(lengte * breedte / oppervlakteUitPak)
}

module.exports = { aantalPakketten }