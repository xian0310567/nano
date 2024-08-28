import React from "react";

const useSessionStorage = () => {
  const setSessionStorage = (key: string, value: string) => {
    sessionStorage.setItem(key, value);
  };

  const getSessionStorage = (key: string) => {
    return sessionStorage.getItem(key);
  };

  return { setSessionStorage, getSessionStorage };
};

export default useSessionStorage;
