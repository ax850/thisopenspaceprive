import {hostConstants} from "../constants/hosts.constants";

const initialState = {
  result: null,
  page: 1,
  error: {
    status: false,
    msg: null
  }
};

export function hosts(state = initialState, action) {
  switch (action.type) {
    case hostConstants.GET_REQUEST:
      return {
        ...state,
      };
    case hostConstants.GET_SUCCESS:
      return {
        ...state,
        page: parseInt(action.page, 10),
        result: action.hosts
      };
    case hostConstants.GET_ERROR:
      return {
        ...state,
        error: {
          status: true,
          msg: 'Failed To Get Hosts'
        }
      };
    default:
      return {
        ...state
      }
  }
}