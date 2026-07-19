import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [dummy, setDummy] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
        setTimeout(() => {
            console.log('Fetching data from API...');
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        setData(data);
    })  
    .catch(error => {
        setError(error.message);
        console.log('Error fetching data:', error.message);
    })
        }, 2000);
    }, []);

  return [data, dummy, error];
};

export default useFetch;