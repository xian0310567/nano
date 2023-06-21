import React from "react";
import crypto from "crypto-js";

const useCrypto = () => {
  const encodeText = (encodeValue: string) => {
    const value = crypto.AES.encrypt(
      encodeValue,
      process.env.NEXT_PUBLIC_NANO_PRIVATE_KEY
    ).toString();

    return value;
  };

  const decodeText = (decodeValue: string) => {
    const value = crypto.AES.decrypt(
      decodeValue,
      process.env.NEXT_PUBLIC_NANO_PRIVATE_KEY
    ).toString();

    return value;
  };

  return { encodeText, decodeText };
};

export default useCrypto;
