import { SignInCallback } from "./services/signIn.type";
import { SetUserInfoCallback } from "./services/setUserInfo.type";

export type SignInServiceCallback = SignInCallback & SetUserInfoCallback;
