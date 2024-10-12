import Skeleton from "react-loading-skeleton";
import { GreetingText, GreetingTextSpan } from "./clockStyles";
import IconSun from "../../assets/desktop/icon-sun.svg";
import IconMoon from "../../assets/desktop/icon-moon.svg";
import { isDark } from "../../helpers/isDark";
import { timeOfTheDay } from "../../helpers/timeOfTheDay";

export default function Greeting({ timeAvailable, time }) {
  return (
    <GreetingText>
      {timeAvailable && (
        <>
          {!isDark(time.hour) ? <IconSun /> : <IconMoon />}
          <span>Good {timeOfTheDay(Number(time.hour))}, </span>
          <GreetingTextSpan>it’s currently</GreetingTextSpan>
        </>
      )}
      {!timeAvailable && (
        <Skeleton containerClassName="flex-1" className="greeting-skeleton" />
      )}
    </GreetingText>
  );
}
