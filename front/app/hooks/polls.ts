import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchPolls = async (id: string) => {
  // const id = "ad80f558-c23b-4ec5-94e6-530ae94df0bb";
  const res = await api.get(`/polls/${id}`);
  return res.data;
};
const useQueryPolls = (id: string) =>
  useQuery({
    queryKey: ["polls"],
    queryFn: () => fetchPolls(id),
  });

export { fetchPolls, useQueryPolls };
