import axios from "axios";

export const getMe = async (token) => {
  return await axios.get("http://localhost:8000/api/getme", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
