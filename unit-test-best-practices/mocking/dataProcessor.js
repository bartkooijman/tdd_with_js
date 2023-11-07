import { fetchData } from './apiModule';

export const processData = async () => {
  // Use the data from the API call
  const data = await fetchData();
  const processedData = data.map(item => item.name.toUpperCase());
  return processedData;
};