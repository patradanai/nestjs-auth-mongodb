export interface JwtPayload {
  userId: string;
}

export interface AuthPayload {
  username: string;
  password: string;
}

export interface requestWithUser extends Request {
  userId: string;
}

export interface responseWithUser {
  userId: string;
  accessToken: string;
  refreshToken: string;
  roles: string[];
}
