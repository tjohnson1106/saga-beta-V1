import { AsyncStorage } from "react-native";

export function login() {
  return {
    type: "LOGIN"
  };
}

export function getUserInfo(info) {
  return {
    type: "GET_USER_INFO",
    info
  };
}

export function logout() {
  return async dispatch => {
    try {
      await AsyncStorage.removeItem();

      return dispatch({
        type: "Login"
      });
    } catch (error) {
      throw error;
    }
  };
  return {
    type: "LOGOUT"
  };
}
