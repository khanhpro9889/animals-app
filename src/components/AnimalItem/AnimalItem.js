import React from "react";
import { Wrapper } from "./styles";
import PropTypes from "prop-types";

export default function AnimalItem({ animal }) {
  return (
    <Wrapper>
      {animal.id}. {animal.name}
    </Wrapper>
  );
}

AnimalItem.propTypes = {
  animal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
