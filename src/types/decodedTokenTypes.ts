export interface IDecodedToken {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

export interface IAuthUser {
  email: string;
  sub: string;
}