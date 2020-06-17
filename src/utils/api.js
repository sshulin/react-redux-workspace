import { getLocalStorage, setLocalStorage } from './localStorage';

export const getItemsApi = () => {
  return new Promise((resolve, reject) => {
    const data = getLocalStorage('items')
    if(data) {
      resolve(data);
    } else {
      reject(false)
    }
  });
}

export const saveItemsApi = (params) => {
  return new Promise((resolve, reject) => {
    setLocalStorage('items', params);

    resolve(true);
  });
}
