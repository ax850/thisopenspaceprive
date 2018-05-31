import {hostConstants} from "../constants/hosts.constants";

export const hostServices = {
  getHosts
};

function getHosts(page) {
  return fetch(hostConstants.API_URL + page, {
    method: 'GET',
  }).then(response => {
    if (!response.ok) {
      return new Promise.reject(response.statusText);
    }
    return response.json();
  }).then(hosts => {
    return new Promise((resolve, reject) => {
      if (hosts){
        return resolve({hosts})
      } else {
        return reject({msg:'Failed To Get Hosts'})
      }
    });
  });
}