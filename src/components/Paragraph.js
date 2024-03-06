import React from "react";

const Paragraph = ({ section, text }) => {
  return <p className={`${section}-section__p`}>{text}</p>;
};

export default Paragraph;
