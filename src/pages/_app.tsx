import CommonLayout from "@/layouts/CommonLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white">
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </div>
  );
}
