export const fetchData = async () => {
  // Assume this function makes an API call
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
};