import React from "react";
import crypto from "crypto-js";

export const encodeText = (encodeValue: string) => {
  const value = crypto.AES.encrypt(
    encodeValue,
    process.env.NANO_PRIVATE_KEY ?? ""
  ).toString();

  return value;
};

export const decodeText = (decodeValue: string) => {
  const value = crypto.AES.decrypt(
    decodeValue,
    process.env.NANO_PRIVATE_KEY ?? ""
  ).toString();

  return value;
};
