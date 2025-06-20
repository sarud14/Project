import axios from "axios";

export const getMe = async (token) => {
  return await axios.get("http://localhost:8000/api/getme", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const actionListUsers = async (token) => {
  return await axios.get("http://localhost:8000/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const actionUpdateRole = async (token, id, role) => {
  return await axios.patch("http://localhost:8000/api/user/role/" + id, role, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const actionDeleteUser = async (token, id) => {
  return await axios.delete("http://localhost:8000/api/user/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
