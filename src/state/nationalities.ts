import { atom } from 'recoil';
import { countries } from '../utils';

export const nationalitiesState = atom({
  key: "nationalities",
  default: countries.map(({code}) => code),
});
