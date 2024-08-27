import { SignInStateGetter } from "./useSignInState.type";
import { SignInServiceCallback } from "./useSignInService.type";

export type SignInCallback = {
  state: SignInStateGetter;
} & SignInServiceCallback;
