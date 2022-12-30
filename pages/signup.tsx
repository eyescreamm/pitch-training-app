import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth, useUser } from "../hooks/firebase";

type Inputs = {
  email: string;
  password: string;
  confirmationPassword: string;
};

const signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const auth = useAuth();
  const currentUser = useUser();
  const router = useRouter();
  const [isProcessingSignup, setIsProcessingSignup] = useState(false);

  const signup = async (email: string, password: string) => {
    try {
      setIsProcessingSignup(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsProcessingSignup(false);
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = ({
    email,
    password,
    confirmationPassword,
  }) => {
    if (password === confirmationPassword) {
      signup(email, password);
    } else {
      alert("パスワードが一致しません");
    }
  };

  useEffect(() => {
    if (currentUser) router.push("/");
  }, [currentUser, router]);

  return (
    <div className="w-full text-center flex flex-1 flex-col justify-center items-center px-20 min-h-screen">
      <div className="flex w-2/3 rounded-2xl shadow-2xl max-w-4xl">
        <form className="theme-alt bg-white w-3/5 px-20 pt-6 pb-8 mb-4">
          <div className="py-5">
            <p className="font-bold pb-2 text-2xl">Create your account</p>
            <div className="theme line"></div>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="example@hoge.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <p>Please enter your password.</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Confirm password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register("confirmationPassword", { required: true })}
            />
            {errors.confirmationPassword && (
              <p>Please re-enter your password.</p>
            )}
          </div>
          <div className="">
            <button
              className="theme hover:theme-hover text-white py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="w-2/5 py-20 theme rounded-tr-2xl rounded-br-2xl">
          <div className="pb-5 pt-16">
            <p className="font-bold pb-2 text-2xl">Welocome my friend</p>
            <div className="theme-alt line"></div>
          </div>
          <div className="px-12">
            <p>If you already have an account, please login.</p>
          </div>
          <div className="mt-10">
            <Link
              href={"/login"}
              className="theme-alt font-semibold hover:theme-hover text-white py-2 px-6 rounded-2xl focus:outline-none focus:shadow-outline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
