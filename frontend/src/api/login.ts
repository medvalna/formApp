import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApiRequest } from "./baseApiRequest";
import { UserRegister, UserReply } from "../types/user";
import { saveAccessToken } from "../utils/login";
import { useNavigate } from "react-router-dom";
export const useRegister = () => {
  const client = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    //mutationKey: ["register"],
    mutationFn: (data: UserRegister) =>
      baseApiRequest<UserReply>({
        url: "/users",
        method: "POST",
        data,
      }),
    retry: false,
    onSuccess: (data: UserReply) => {
      saveAccessToken(data.token);
      client.invalidateQueries({ queryKey: ["checkAuth"] });
      navigate("/homepage");
    },
  });
};
