import { signOut } from "firebase/auth";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../hooks/firebase";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>***</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link
        href={"/play"}
        className="theme-alt font-semibold hover:theme-hover text-white py-2 px-6 rounded-2xl focus:outline-none focus:shadow-outline"
      >
        Start
      </Link>
    </div>
  );
};

export default Home;
