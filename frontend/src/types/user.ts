export type User = {
  email: string;
};

export type UserRegister = {
  email: string;
  password: string;
};

export type UserReply = User & { accessToken: string };

export type CheckReply = { check: boolean };
export type UserCheck = {
  accessToken: string | null;
};
