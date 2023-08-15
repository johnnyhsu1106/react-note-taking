import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {

  const [localStorageValue, setLocalStorageValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    } 

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageValue))
  }, [key, localStorageValue]);

  return [localStorageValue, setLocalStorageValue];
};

export default useLocalStorage;