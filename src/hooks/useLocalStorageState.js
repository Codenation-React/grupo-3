// @format
import { useEffect, useState } from "react";

const useLocalStorageState = (key, defaultValue) => {
  // make pieceof state, based off value in localStorage (or default)
  const [state, setState] = useState(() => {
    let val;

    try {
      val = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue),
      );
    } catch (e) {
      val = defaultValue;
    }
    return val;
  });

  // use useEffect to update localStorage whenever that piece of state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorageState;
