import Container from "../../shared/components/Container";
import useTimeQuery from "../../hooks/useTimeQuery";
import Skeleton from "react-loading-skeleton";
import useErrorNotification from "../../hooks/useErrorNotification";
import { isDark } from "../../helpers/isDark";
import { TZDate } from "@date-fns/tz";
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionText,
  DescriptionWrapper,
  DetailsSection,
} from "./detailsStyles";

const sectionVariants = {
  hidden: {
    height: "0%",
  },
  visible: {
    height: "auto",
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    height: "0%",
    opacity: 0,
    y: 1000,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Details({ details }) {
  const { timeIsSuccess, timeData, timeIsPending, timeError } = useTimeQuery();
  const isDarkTime = isDark(
    new TZDate(timeData?.datetime, timeData?.timezone).getHours() ||
      new Date().getHours
  );

  // const isDarkTime = isDark(new Date().getHours());

  useErrorNotification(timeError);

  return (
    <DetailsSection
      initial="hidden"
      key="detailssection"
      animate="visible"
      variants={sectionVariants}
      exit="exit"
      $details={details}
      $isDarkTime={isDarkTime}
    >
      <Container>
        <DescriptionList $isDarkTime={isDarkTime}>
          <DescriptionWrapper>
            <DescriptionTerm>Current Timezone</DescriptionTerm>
            <DescriptionText>
              {timeIsSuccess && timeData.timezone}
              {timeIsPending && <Skeleton />}
            </DescriptionText>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <DescriptionTerm>Day of the week</DescriptionTerm>
            <DescriptionText>
              {timeIsSuccess && timeData.day_of_week}
              {timeIsPending && <Skeleton />}
            </DescriptionText>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <DescriptionTerm>Day of the year</DescriptionTerm>
            <DescriptionText>
              {timeIsSuccess && timeData.day_of_year}
              {timeIsPending && <Skeleton />}
            </DescriptionText>
          </DescriptionWrapper>

          <DescriptionWrapper>
            <DescriptionTerm>Week number</DescriptionTerm>
            <DescriptionText>
              {timeIsSuccess && timeData.week_number}
              {timeIsPending && <Skeleton />}
            </DescriptionText>
          </DescriptionWrapper>
        </DescriptionList>
      </Container>
    </DetailsSection>
  );
}
