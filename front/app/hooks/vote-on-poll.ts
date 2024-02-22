import { useMutation } from "@tanstack/react-query";
import { api } from "../utils/api";
import toast from "react-hot-toast";

const votePoll = async (pollOptionId: string) => {
  const id = "ad80f558-c23b-4ec5-94e6-530ae94df0bb";
  return api.post(`/polls/${id}/votes`, {
    pollOptionId: pollOptionId,
  });
};

const useVotePoll = () => {
  return useMutation({
    mutationFn: votePoll,
    onSuccess: () => {
      toast.success("Voto computado com sucesso");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao computar o voto");
    },
  });
};

export { votePoll, useVotePoll };
