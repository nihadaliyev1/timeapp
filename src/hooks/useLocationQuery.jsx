import { useQuery } from "@tanstack/react-query";
import { getGeolocation } from "../api/geolocation";

export default function useLocationQuery() {
  const {
    isPending: locationIsPending,
    isSuccess: locationIsSuccess,
    data: locationData,
    error: locationError,
  } = useQuery({
    queryKey: ["location"],
    queryFn: getGeolocation,
    staleTime: Infinity,
  });

  return { locationIsPending, locationIsSuccess, locationData, locationError };
}
