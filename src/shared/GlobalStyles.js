import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {

    //Colors
    --cl-white: #fff;
    --cl-black: #000;
    --cl-brand: #303030;

    // Font Family
    --ff-main: "Inter", sans-serif;

    // Font Sizes

    --fs-med: 1.8rem;
    --fs-med-2: 2rem;
    --fs-med-3:2.4rem;
    --fs-med-4:1.6rem;
    --fs-med-5:1.5rem;
    --fs-med-6:1.3rem;
    --fs-med-7:2rem;
    --fs-sml:1.2rem;
    --fs-sml-2:1rem;
    --fs-huge: 20rem;
    --fs-huge-2:17.5rem;
    --fs-huge-3:10rem;
    --fs-big:4rem;
    --fs-big-2:5.6rem;
    --fs-big-3:3.2rem;

    // Letter Spacing
    --ls-std:4px;
    --ls-tight:-5px;
    --ls-tight-2:-2.5px;

    // Line Height

    --lh-std: 2.8rem;
    --lh-med:2.2rem;

    // Spacing
    --c-size: 111rem;
    --c-pad: 3rem;
    --c-size-sml:85rem;

    // Gaps
    --g-std: 1.5rem;
    --g-lrg-1:5.6rem;
    --g-lrg-2:10rem;
    --g-lrg-3:8rem;
    --g-lrg-4:6.4rem;
    --g-lrg-5:4.8rem;
    --g-med:4rem;
    --g-sml:1rem;



    // Radius
    --rad-std:2.8rem;


    // Breakpoints
    tablet: 48em;
}

*,
*::before,
*::after {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html {
    font-size:62.5%;
}

body {
    font-family: var(--ff-main);
    color: var(--cl-white);
    overflow-y:hidden;
}


.toast-class {
    font-size:1.2rem;

}

.flex-1 {
    flex:1;
}

.clock-skeleton {
    display:inline-block;
    width:57.6rem;

    @media (max-width:48em) {
        width:50rem;
    }

    @media (max-width:33em) {
        width:24rem;
    }
}

.greeting-skeleton {
 
    margin-bottom:0.5rem;
}

`;
