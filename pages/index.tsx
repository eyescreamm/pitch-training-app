import { signOut } from "firebase/auth";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../hooks/firebase";

const Home: NextPage = () => {
  const router = useRouter();
  const auth = useAuth();
  const handleLogout = async () => {
    await signOut(auth);
    await router.push("/login");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>***</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Link
        href={"/dashboard"}
        className="theme-alt font-semibold hover:theme-hover text-white py-2 px-6 rounded-2xl focus:outline-none focus:shadow-outline"
      >
        Start
      </Link>
    </div>
  );
};

export default Home;
