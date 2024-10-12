import styled from "styled-components";
import imgDayTime from "./assets/desktop/bg-image-daytime.jpg";
import imgNightTime from "./assets/desktop/bg-image-nighttime.jpg";
import imgDayTimeTablet from "./assets/tablet/bg-image-daytime.jpg";
import imgNightTimeTablet from "./assets/tablet/bg-image-nighttime.jpg";
import imgDayTimeMobile from "./assets/mobile/bg-image-nighttime.jpg";
import imgNightTimeMobile from "./assets/mobile/bg-image-nighttime.jpg";

export const MainContent = styled.main`
  display: flex;
  height: 100dvh;
  flex-direction: column;
  justify-content: space-between;
  padding-block: ${(props) =>
    props.$details ? "0" : "var(--g-lrg-1) var(--g-lrg-2)"};

  @media (max-width: 48em) {
    padding-block: ${(props) =>
      props.$details ? "0" : "var(--g-lrg-3) var(--g-lrg-4)"};
  }

  @media (max-width: 48em) {
    padding-block: ${(props) => (props.$details ? "0" : "var(--g-med)")};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) =>
      props.$isDarkTime ? imgNightTime : imgDayTime});
    background-repeat: no-repeat;
    background-size: cover;

    filter: brightness(0.6);
    z-index: -10;
    transform: scale(1); /* Ensures no distortion */
    transition: transform 0.3s ease; /* Smooth transition on resize (optional) */

    @media (max-width: 48em) {
      background-image: url(${(props) =>
        props.$isDarkTime ? imgNightTimeTablet : imgDayTimeTablet});
    }

    @media (max-width: 33em) {
      background-image: url(${(props) =>
        props.$isDarkTime ? imgNightTimeMobile : imgDayTimeMobile});
    }
  }
`;
