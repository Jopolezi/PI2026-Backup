import api from "./api";

export const authService = {
  login: async (payload) => {
    const { data } = await api.post("/users/auth/login", payload);
    return data;
  },

  register: async (payload) => {
    const { data } = await api.post("/users", payload);
    return data;
  },

  me: async () => {
    const { data } = await api.get("/users/me");
    return data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};