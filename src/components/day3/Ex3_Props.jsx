import React from "react";
import PropTypes from "prop-types";

export default function Ex3_Props({onClick,label}) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}

Ex3_Props.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
