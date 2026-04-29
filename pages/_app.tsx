import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    /* lang attribute for screen readers & SEO */
    <div lang="en">
      <Component {...pageProps} />
    </div>
  );
}
