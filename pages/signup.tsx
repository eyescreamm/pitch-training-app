import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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

  return (
    <>
      <form action="">
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@hoge.com"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>Please enter your password.</p>}
        </div>
        <div>
          <label>Confirm password</label>
          <input
            type="password"
            {...register("confirmationPassword", { required: true })}
          />
          {errors.confirmationPassword && <p>Please re-enter your password.</p>}
        </div>
        <button type="submit">サインアップ</button>
      </form>
    </>
  );
};

export default signup;
