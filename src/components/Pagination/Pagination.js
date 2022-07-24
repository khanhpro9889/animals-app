import React from "react";
import { Wrapper, Button, Flex } from "./styles";
import PropTypes from "prop-types";

export default function Pagination({ totalPage, currentPage, onChangePage }) {
  console.log(currentPage);
  return (
    <Wrapper>
      <Flex>
        {currentPage > 1 && (
          <Button onClick={() => onChangePage("prev")}>{"<"}</Button>
        )}
        {currentPage < totalPage && currentPage > 0 && (
          <Button onClick={() => onChangePage("next")}>{">"}</Button>
        )}
      </Flex>
    </Wrapper>
  );
}

Pagination.propTypes = {
  totalPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};
