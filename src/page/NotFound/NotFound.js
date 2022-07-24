import React from "react";
import { HOME_PATH } from "../../constants/path";
import { Wrapper, Button } from "./styles";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h2>404 Not Found</h2>
      <Button onClick={() => navigate(HOME_PATH, { replace: true })}>X</Button>
    </Wrapper>
  );
}
