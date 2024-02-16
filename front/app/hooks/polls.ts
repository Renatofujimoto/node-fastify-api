import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

export interface Poll {
  id?: Number;
}
const fetchPolls = async (id: Poll) => {
  const res = await api.get(`/polls/${id}`);
  return res.data;
};
const useQueryPolls = (id: Poll) =>
  useQuery({
    queryKey: ["polls"],
    queryFn: () => fetchPolls(id),
  });

export { fetchPolls, useQueryPolls };
