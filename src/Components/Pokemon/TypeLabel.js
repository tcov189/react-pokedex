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

    case "flying":
      labelClasses += "bg-blue-400";
      break;

    case "bug":
      labelClasses += "bg-green-300";
      break;

    case "electric":
      labelClasses += "bg-yellow-300";
      break;

    case "ground":
      labelClasses += "bg-yellow-800 text-gray-100";
      break;

    case "fairy":
      labelClasses += "bg-red-300";
      break;

    case "fighting":
      labelClasses += "bg-red-800 text-gray-200";
      break;

    case "psychic":
      labelClasses += "bg-red-500 text-gray-200";
      break;

    case "rock":
      labelClasses += "bg-red-900 text-gray-200";
      break;

    case "steel":
      labelClasses += "bg-gray-400 text-gray-200";
      break;

    case "ice":
      labelClasses += "bg-blue-200 text-gray-800";
      break;

    case "ghost":
      labelClasses += "bg-purple-700 text-gray-200";
      break;

    case "dragon":
      labelClasses += "bg-purple-900 text-gray-200";
      break;

    default:
      labelClasses += "bg-gray-300";
      break;
  }

  return <div className={labelClasses}>{type}</div>;
}
