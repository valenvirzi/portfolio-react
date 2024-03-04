import React from "react";

const SectionTitle = ({ title, section }) => {
  return (
    <h2 className={`${section}-section__title section__title`}>{title}</h2>
  );
};

export default SectionTitle;
