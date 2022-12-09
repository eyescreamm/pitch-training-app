import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { AuthProvider } from "./AuthContent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component className="" {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
