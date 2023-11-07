// dataProcessor.test.js
import { processData } from './dataProcessor';
import * as apiModule from './apiModule';

// Mock the fetchData function
jest.mock('./apiModule', () => ({
  fetchData: jest.fn(),
}));

describe('processData', () => {
  it('processes data correctly', async () => {
    // Mock the fetchData implementation and return some sample data
    apiModule.fetchData.mockResolvedValue([
      { name: 'John' },
      { name: 'Doe' },
    ]);

    // Call the function that depends on fetchData
    const result = await processData();

    // Assert the result
    expect(result).toEqual(['JOHN', 'DOE']);
  });
});
