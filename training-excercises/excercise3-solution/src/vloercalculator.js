const { getOppervlaktePerPak } = require ("./oppervlaktePerPak")

function aantalPakketten(lengte, breedte, productNummer, oppervlaktePerPak = getOppervlaktePerPak() ) {
  return Math.ceil(lengte * breedte / oppervlaktePerPak(productNummer))
}

module.exports = { aantalPakketten }