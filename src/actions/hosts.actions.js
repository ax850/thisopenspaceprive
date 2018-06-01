import {hostConstants} from "../constants/hosts.constants";
import {hostServices} from "../services/host.services";

export const hostsActions = {
  getHosts,
};

function getHosts(page) {
  return dispatch => {
    dispatch(request());
    hostServices.getHosts(page)
      .then(
        hosts => {
          dispatch(success(hosts, page))
        },
        error => {
          dispatch(failure(error))
        }
      )
  };

  function request() {
    return {type: hostConstants.GET_REQUEST}
  }

  function success(hosts) {
    return {type: hostConstants.GET_SUCCESS, hosts, page}
  }

  function failure(error) {
    return {type: hostConstants.GET_ERROR, error}
  }
}

