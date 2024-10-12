import Skeleton from "react-loading-skeleton";
import { Time, TimeZone } from "./clockStyles";

export default function TimeComponent({
  timeAvailable,
  timeError,
  time,
  timeData,
}) {
  return (
    <Time>
      {(!timeAvailable || timeError) && (
        <Skeleton containerClassName="clock-skeleton" count={1} />
      )}
      {timeAvailable &&
        `${time.hour.padStart(2, 0)}:${time.minute.padStart(2, 0)}`}

      {timeAvailable && <TimeZone>{timeData.abbreviation}</TimeZone>}
    </Time>
  );
}
