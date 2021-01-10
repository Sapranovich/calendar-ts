import * as CONSTANTS from '../constants.js';
function updateStore(key:number, hour:any, data:string){
  const store = JSON.parse(localStorage.getItem("storeMessages") || '{}'); 
  if(!store.hasOwnProperty(key)){  
    store[key] = Array(CONSTANTS.HOURS_DAY).fill(undefined);
  }
  store[key][hour] = data ? data : undefined;
  localStorage.setItem("storeMessages", JSON.stringify(store));
}

export default updateStore;