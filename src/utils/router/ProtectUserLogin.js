import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ProctectUserLogin() {
  const userStore = useSelector(({ UserReducer }) => UserReducer);
  if (!userStore.isLoadingUser && !userStore.user) {
    return <Outlet />;
  }
  if (!userStore.isLoadingUser && userStore.user) {
    return <Navigate to="/" replace={true} />;
  }
}
