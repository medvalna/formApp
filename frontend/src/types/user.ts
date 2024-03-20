export type User = {
  email: string;
};

export type UserRegister = {
  email: string;
  password: string;
};

export type UserReply = User & { token: string };
