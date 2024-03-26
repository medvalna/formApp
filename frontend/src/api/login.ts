import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseApiRequest } from "./baseApiRequest";
import { CheckReply, UserCheck, UserRegister, UserReply } from "../types/user";
import { getAccessToken, saveAccessToken } from "../utils/login";
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
      saveAccessToken(data.accessToken);
      console.log(data);
      client.invalidateQueries({ queryKey: ["checkAuth"] });
      navigate("/homepage");
    },
    onError: (err: Error) => {
      console.log(err);
    },
  });
};

  });
};
