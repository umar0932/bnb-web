import { useLogoutMutation } from "@/api/Authentication/useLogoutMutation";
import { Button, type ButtonProps } from "@/core/ui/button";
import React from "react";

const LogoutButton = ({ ...props }: ButtonProps) => {
  const { mutate } = useLogoutMutation();
  return <Button onClick={() => mutate()} {...props} />;
};

export default LogoutButton;
