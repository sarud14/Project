import { create } from "zustand";
import { actionLogin } from "../api/auth";
import { persist } from "zustand/middleware";

// create store
const authStore = (set) => ({
  token: null,
  User: [],
  actionLoginWithZustand: async (value) => {
    try {
      const res = await actionLogin(value);
      const { payload, token, msg} = res.data;
      // console.log(res.data.payload);
      // console.log(res.data.token);
      set({ token, user: payload });
      return { success: true, role: payload.role, msg  };
    } catch (error) {
      // console.log("error", error);
      return { success: false, msg: error.response?.data?.msg };
    }
  },
});

// UseStore
const useAuthStore = create(persist(authStore, {name: "auth-store"}));

export default useAuthStore;
