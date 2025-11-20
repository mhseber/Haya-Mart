import React from "react";
import LoginButton from "../Or-Components/UsersInOut/LoginButton";
import UserInfo from "../Or-Components/UsersInOut/UserInfo";

const AuthUsersPage = () => {
  return (
    <div className="pt-40">
      <LoginButton />
      <p className="text-3xl font-extrabold">FROM CLINT COMPONENTS</p>
      <UserInfo />
    </div>
  );
};

export default AuthUsersPage;
