import { AppProps } from "next/dist/next-server/lib/router/router";
import { FC } from "react";
import "tailwindcss/tailwind.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
