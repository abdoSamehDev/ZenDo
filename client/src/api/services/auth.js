import apiClient from "../axiosClient.js";

export async function login(userData) {
  // apiClient
  //   .post("auth/login", userData)
  //   .then((response) => {
  //     return response;
  //   })
  //   .catch((e) => {
  //     console.error("Error login user: ", e);
  //     throw e;
  //   });
  try {
    const response = await apiClient.post("/auth/login/", userData);
    return response.data;
  } catch (e) {
    console.error("Error login user: ", e);
    throw e;
  }
}

export async function register(userData) {
  try {
    const response = await apiClient.post("/auth/register", userData);
    return response.data;
  } catch (e) {
    console.error("Error register user: ", e);
    throw e;
  }
}
