import { POST } from "./api";

export const login = (data: any) => {
  return POST("/login", data);
};
