import Quote from "./features/quote/Quote";
import Clock from "./features/clock/Clock";
import { useState } from "react";
import Details from "./features/details/Details";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import useNetworkStatus from "./hooks/useNetworkStatus";
import useTimeQuery from "./hooks/useTimeQuery";
import { isDark } from "./helpers/isDark";
import { GlobalStyles } from "./shared/GlobalStyles";
import { TZDate } from "@date-fns/tz";
import { MainContent } from "./appStyles";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const [details, setDetails] = useState(false);
  const { timeData } = useTimeQuery();
  const isDarkTime = isDark(
    new TZDate(timeData?.datetime, timeData?.timezone).getHours() ||
      new Date().getHours()
  );

  useNetworkStatus();

  return (
    <>
      <GlobalStyles />
      <ToastContainer
        bodyClassName="toast-class"
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover={false}
      />

      <MainContent $isDarkTime={isDarkTime} $details={details}>
        <AnimatePresence>{!details && <Quote />}</AnimatePresence>
        <Clock details={details} setDetails={setDetails} />
        <AnimatePresence>
          {details && <Details details={details} />}
        </AnimatePresence>
      </MainContent>
    </>
  );
}

export default App;
