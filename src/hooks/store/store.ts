import React from "react";
import { atom } from "recoil";

import { DefaultUser } from "./lib/store.interface";

export const defaultUserState = atom<DefaultUser>({
  key: "defaultUserState",
  default: {
    key: 0,
    id: undefined,
  },
});
