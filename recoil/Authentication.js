import { atom } from "recoil";

export const loginStatus = atom({
  key: "isLogined",
  default: false,
});