export type UserInfoProps = {
  userId: string;
  password: string;
};

export type UserLoginCallback = {
  error: string | null;
  ok: boolean;
  status: number;
  url: string;
};
