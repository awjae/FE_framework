
import { create } from 'zustand';
import { UserType } from '../types';

export const useUserStore = create((set) => ({
  user: {},
  setUser: ({  }: UserType) => set((_: any) => ({ user: {  }})),
  token: localStorage.getItem("token") || "",
  setToken: (tokenString: string) => set((_: any) => ({ token: tokenString})),
  resetToken: () => set((_: any) => ({ token: ""})),
}))