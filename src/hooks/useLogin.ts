import useUserStore from "@/store/user";
import React from "react";

function useLogin() {
  const access_token = useUserStore((state) => state.access_token);
  return !!access_token;
}

export default useLogin;
