import React from "react";

export const Card = (props) => {
  const { borderColor, title, content, icon } = props;
  return (
    <div className="bg-neutral-100 p-5 rounded shadow-sm border-t-4" style={{borderColor: `${borderColor}`}}>
      <h3 className="text-lg text-primary-200 mb-2.5 font-extrabold text-left">
        {title}
      </h3>
      <p className="text-primary-100 text-base text-left">{content}</p>
      <div className="mt-6 flex justify-end">{icon}</div>
    </div>
  );
};
