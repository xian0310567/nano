import signInServive from "./signIn";
import setUserInfoService from "./setUserInfo";

import { SignInStateCallback } from "../types/useSignInState.type";
import { SignInServiceCallback } from "../types/useSignInService.type";

const index = (state: SignInStateCallback): SignInServiceCallback => {
  const { signIn } = signInServive(state);
  const { setUserInfo } = setUserInfoService(state);

  return { signIn, setUserInfo };
};

export default index;
