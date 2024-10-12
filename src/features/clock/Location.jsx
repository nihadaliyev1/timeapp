import Skeleton from "react-loading-skeleton";
import { LocationText } from "./clockStyles";

export default function Location({
  locationIsSuccess,
  locationData,
  locationIsPending,
  locationError,
}) {
  return (
    <LocationText>
      {locationIsSuccess &&
        `In ${locationData.cityName}, ${locationData.countryCode}`}
      {(locationIsPending || locationError) && <Skeleton count={0.5} />}
    </LocationText>
  );
}
