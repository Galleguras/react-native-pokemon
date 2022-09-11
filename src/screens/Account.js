import React from "react";
import { View } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../components/hooks/useAuth";
export default function Account() {
  const { auth } = useAuth();

  return auth ? <UserData /> : <LoginForm />;
}
