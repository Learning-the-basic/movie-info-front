import { atom } from "recoil";

export const defaultPopup = atom({
  key: 'defaultPopup',
  default: ''
});

export const userToken = atom({
  key: 'userToken',
  default: ''
});

export const sortValue = atom({
  key: 'sortValue',
  default: '정확도순'
});