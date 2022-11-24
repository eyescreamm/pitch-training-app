import React from "react";

const signup = () => {
  return (
    <>
      <form action="">
        <div>
          <label>Email</label>
          <input type="email" placeholder="example@hoge.com" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <label>Confirm password</label>
          <input type="password" />
        </div>
        <button type="submit">サインアップ</button>
      </form>
    </>
  );
};

export default signup;
