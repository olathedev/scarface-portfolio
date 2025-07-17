import localFont from "next/font/local";
import { Montserrat } from 'next/font/google';

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },

    {
      path: "../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },

    {
      path: "../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export { satoshi };

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});
