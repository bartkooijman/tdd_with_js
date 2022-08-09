public void testGetFlightsByFromAirport_OneOutboundFlight_mg() throws Exception {
  loadAirportsAndFlightsFromFile("test-flights.csv");
  // Exercise System
  List flightsAtOrigin = facade.getFlightsByOriginAirportCode( "YYC");
  // Verify Outcome
  assertEquals( 1, flightsAtOrigin.size());
  FlightDto firstFlight = (FlightDto) flightsAtOrigin.get(0);
  assertEquals( "Calgary", firstFlight.getOriginCity());
}  

//we can't easily see what is in test-flights.csv
//changes in the CSV can break the test