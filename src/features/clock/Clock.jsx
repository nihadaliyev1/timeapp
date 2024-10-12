import Container from "../../shared/components/Container";

import Button from "../../shared/components/Button";
import { useEffect, useRef, useState } from "react";
import { addMilliseconds } from "date-fns";
import { TZDate } from "@date-fns/tz";
import useTimeQuery from "../../hooks/useTimeQuery";
import useLocationQuery from "../../hooks/useLocationQuery";
import useErrorNotification from "../../hooks/useErrorNotification";
import { queryClient } from "../../main";
import {
  ArrowDownComponent,
  ArrowWrapper,
  ClockSection,
  ClockWrapper,
  ContentWrapper,
} from "./clockStyles";
import Greeting from "./Greeting";
import TimeComponent from "./TimeComponent";
import Location from "./Location";

export default function Clock({ details, setDetails }) {
  const [time, setTime] = useState({
    hour: undefined,
    minute: undefined,
  });
  const { timeIsSuccess, timeData, timeError } = useTimeQuery();
  const { locationIsPending, locationIsSuccess, locationData, locationError } =
    useLocationQuery();
  const prevTime = useRef({
    hour: null,
    minute: null,
  });
  useErrorNotification(locationError, timeError);

  const darkTimeHour = 18;
  const darkTimeMinute = 0;
  const timeAvailable = time.hour && time.minute && !timeError;

  useEffect(() => {
    // Use API once in an hour to solve disrepancy between system time and real time if system time is set incorrectly
    // Use TZDate to account for the fact that user's timezone may be set incorrectly on their device
    let interval;
    if (timeIsSuccess) {
      let accurateTime = new Date(timeData.datetime);
      let systemTime = new Date();
      let offset = accurateTime - systemTime;

      interval = setInterval(() => {
        const now = addMilliseconds(
          new TZDate(new Date(), timeData.timezone),
          offset
        );

        // const now = new Date();

        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        if (
          currentHour !== prevTime.current.hour ||
          currentMinute !== prevTime.current.minute
        ) {
          setTime({ minute: String(currentMinute), hour: String(currentHour) });
          prevTime.current = {
            hour: currentHour,
            minute: currentMinute,
          };
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeData, timeIsSuccess]);

  useEffect(() => {
    if (
      Number(time.hour) === darkTimeHour &&
      Number(time.minute) === darkTimeMinute
    ) {
      queryClient.invalidateQueries({
        queryKey: ["timeApi"],
      });
    }
  }, [darkTimeHour, time]);

  return (
    <ClockSection
      animate={{ height: details ? "50%" : "100%" }}
      transition={{ duration: 0.2 }}
      $details={details}
    >
      <Container>
        <ContentWrapper $details={details}>
          <ClockWrapper>
            <Greeting timeAvailable={timeAvailable} time={time} />
            <TimeComponent
              time={time}
              timeAvailable={timeAvailable}
              timeError={timeError}
              timeData={timeData}
            />
            <Location
              locationIsSuccess={locationIsSuccess}
              locationData={locationData}
              locationIsPending={locationIsPending}
              locationError={locationError}
            />
          </ClockWrapper>
          <Button onClick={() => setDetails((d) => !d)}>
            {details ? "Less" : "More"}
            <ArrowWrapper>
              <ArrowDownComponent $details={details} />
            </ArrowWrapper>
          </Button>
        </ContentWrapper>
      </Container>
    </ClockSection>
  );
}
