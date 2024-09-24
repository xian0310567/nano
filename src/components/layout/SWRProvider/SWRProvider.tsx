import axios from "axios";

import { SWRConfig } from "swr";

import { SWRProviderProps } from "./SWRProvider.type";

const SWRProvider = (props: SWRProviderProps) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  return (
    <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
      {props.children}
    </SWRConfig>
  );
};

export default SWRProvider;
