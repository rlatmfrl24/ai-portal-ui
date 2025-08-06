import { create } from "zustand";

interface UserState {
  id: string;
  name: string;
  email: string;
  apiToken: string;
}

export const useUserStore = create<UserState>()((set) => ({
  id: "user",
  name: "User",
  email: "user@example.com",
  apiToken: "1234567890",
  setUser: (user: UserState) => set(user),
}));
