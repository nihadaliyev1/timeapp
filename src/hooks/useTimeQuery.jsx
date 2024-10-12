import { useQuery } from "@tanstack/react-query";
import { getTime } from "../api/time";

export default function useTimeQuery() {
  const {
    isPending: timeIsPending,
    isSuccess: timeIsSuccess,
    data: timeData,
    error: timeError,
  } = useQuery({
    queryKey: ["timeApi"],
    queryFn: getTime,
    staleTime: 30 * 1000 * 60,
  });

  return { timeIsPending, timeIsSuccess, timeData, timeError };
}
