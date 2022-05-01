import { atom } from 'recoil';

export const nameInputState = atom<string>({
  key: "nameInput",
  default: "",
});
