import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../hooks/firebase";

const Header = () => {
  const router = useRouter();
  const auth = useAuth();
  const handleLogout = async () => {
    await signOut(auth);
    await router.push("/login");
  };

  return (
    <header className="absolute w-full top-0 py-6 z-50">
      <div className="px-20 flex justify-between">
        <div className="">PITCH</div>
        <div className="">
          <a className="px-5">mypage</a>
          <button className="px-5" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
