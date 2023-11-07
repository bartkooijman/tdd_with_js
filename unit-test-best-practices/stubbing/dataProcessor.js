import { fetchDataFromExternalResource } from './externalResource';

export const processData = async () => {
  // Use the data from the external resource
  const data = await fetchDataFromExternalResource();
  // Perform some processing on the data
  return data.toUpperCase();
};