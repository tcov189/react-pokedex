import React from "react";

export default function TypeLabel({ type }) {
  let labelClasses =
    "border rounded border border-gray-500 py-1 px-2 capitalize text-sm ";

  switch (type) {
    case "water":
      labelClasses += "bg-blue-500 text-gray-200";
      break;

    case "fire":
      labelClasses += "bg-red-500 text-gray-800";
      break;

    case "grass":
      labelClasses += "bg-green-500 text-gray-800";
      break;

    case "poison":
      labelClasses += "bg-purple-500 text-gray-200";
      break;

    default:
      labelClasses += "bg-gray-300";
      break;
  }

  return <div className={labelClasses}>{type}</div>;
}
