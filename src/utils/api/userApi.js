import { request } from "./apiConfig";
const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.longvh12.crabdance.com"
  : "http://localhost:3001";
  
export const getUserInfo = (token) => {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editUserInfo = (token, { name, avatar }) => {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
};
