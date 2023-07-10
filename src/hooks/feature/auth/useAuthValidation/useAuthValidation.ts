import React from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { useSession, getSession } from "next-auth/react";

import { defaultUserState } from "@/hooks/store";
import { User } from "@prisma/client";

const useAuthValidation = () => {
  const { data: session, status } = useSession();
  const setUser = useSetRecoilState(defaultUserState);

  React.useEffect(() => {
    if (status == "authenticated") {
      axios
        .post<User>("/api/auth/authenticate", {
          userId: session?.user?.email,
        })
        .then((res) => {
          console.log(res);
          setUser({ key: res.data.id, id: session.user?.email ?? undefined });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [status]);
};

export default useAuthValidation;
