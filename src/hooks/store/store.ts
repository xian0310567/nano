import React from "react";
import { atom } from "recoil";

export const defaultUsrState = atom({
  key: "defaultUserState",
  default: {
    key: 0,
    id: undefined,
  },
});
