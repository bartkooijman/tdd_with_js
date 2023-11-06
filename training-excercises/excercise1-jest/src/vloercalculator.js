const { getOppervlaktePerPak } = require ("./oppervlaktePerPak")

const oppervlaktePerPakket = 2.69
const snijverlies = 1.1

function aantalPakketten(lengte, breedte) {
  return Math.ceil((lengte * breedte / oppervlaktePerPakket) * snijverlies)
}

module.exports = { aantalPakketten }