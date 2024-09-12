"use client";

import { useEffect } from "react";
import ChannelClass from "./Channel.class";

const ChannelTalk = () => {
  const pluginKey = process.env.NEXT_PUBLIC_CHANNEL_KEY ?? "";

  useEffect(() => {
    const CT = new ChannelClass();
    CT.loadScript();
    CT.boot({ pluginKey });

    return () => {
      CT.shutdown();
    };
  }, []);

  return <div />;
};

export default ChannelTalk;
