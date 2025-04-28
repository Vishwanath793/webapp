export const getLocalStorageItem = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item ? item : null;
  } catch (error) {
    console.error("Error getting item from localStorage", error);
    return null;
  }
};
