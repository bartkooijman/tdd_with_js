// dataProcessor.test.js
import { processData } from './dataProcessor';
import * as externalResourceModule from './externalResource';

// Create a stub for the fetchDataFromExternalResource function
const fetchDataStub = jest.fn();

// Replace the original function with the stub
externalResourceModule.fetchDataFromExternalResource = fetchDataStub;

describe('processData', () => {
  it('processes data correctly', async () => {
    // Set up the stub to return a specific value
    fetchDataStub.mockResolvedValue('Stubbed data');

    // Call the function that depends on fetchDataFromExternalResource
    const result = await processData();

    // Assert the result
    expect(result).toBe('STUBBED DATA');
  });
});
