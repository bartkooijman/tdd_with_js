const { getOppervlaktePerPak } = require ("./oppervlaktePerPak")

async function aantalPakketten(lengte, breedte, productNummer, oppervlaktePerPak = getOppervlaktePerPak()) {
  const oppervlakteUitPak = await oppervlaktePerPak(productNummer)
  console.log(oppervlakteUitPak)
  console.log(lengte * breedte / oppervlakteUitPak)
  return Math.ceil(lengte * breedte / oppervlakteUitPak)
}

module.exports = { aantalPakketten }