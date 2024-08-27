import useSignInState from "./useSignInState";
import useSignInService from "./services";

import { SignInCallback } from "./types/useSignIn.type";

const useSignIn = (): SignInCallback => {
  const state = useSignInState();
  const service = useSignInService(state);

  return { state: state.getter, ...service };
};

export default useSignIn;
