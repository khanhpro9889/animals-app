import React from "react";
import { Spinner } from "../LoadingSpinner/styles";
import { Flex } from "./styles";
export default function Loading() {
  return (
    <Flex>
      <Spinner />
    </Flex>
  );
}
