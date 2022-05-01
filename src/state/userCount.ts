import { atom } from 'recoil';

export const userCountState = atom<number>({
  key: "userCount",
  default: -1,
});
