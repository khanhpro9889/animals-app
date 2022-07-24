import React from "react";
import { Flex, Wrapper } from "./styles";

export default function AppLayout({ children }) {
  return (
    <Flex>
      <Wrapper>{children}</Wrapper>
    </Flex>
  );
}
