// dataProcessor.test.js
import { processData } from './dataProcessor';
import * as externalResourceModule from './externalResource';

describe('processData', () => {
  it('processes data correctly', async () => {
    // Create a spy to observe the fetchDataFromExternalResource function
    const fetchDataSpy = jest.spyOn(externalResourceModule, 'fetchDataFromExternalResource');

    // Set up the spy to return a specific value
    fetchDataSpy.mockResolvedValue('Spied data');

    // Call the function that depends on fetchDataFromExternalResource
    const result = await processData();

    // Assert the result
    expect(result).toBe('SPIED DATA');

    // Assert that the fetchDataFromExternalResource function was called
    expect(fetchDataSpy).toHaveBeenCalled();

    // Optionally, you can check the number of times the function was called
    expect(fetchDataSpy).toHaveBeenCalledTimes(1);

    // Optionally, you can check the arguments the function was called with
    expect(fetchDataSpy).toHaveBeenCalledWith();
  });
});
