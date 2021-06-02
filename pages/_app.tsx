import { AppProps } from "next/dist/next-server/lib/router/router";
import { FC } from "react";
import "tailwindcss/tailwind.css";
import { AudioProvider } from "../providers/AudioProvider";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AudioProvider>
      <Component {...pageProps} />
    </AudioProvider>
  );
};

export default MyApp;
