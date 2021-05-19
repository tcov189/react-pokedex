import React from "react";
import Content from "../Layout/Content";
import ScaleLoader from "react-spinners/ScaleLoader";


export default function PokemonDetail() {
  return (
    <Content>
      <h1 className="text-center mb-3">Pokemon Detail</h1>

      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-lg text-gray-700 pb-4">Loading...</p>
        <ScaleLoader color="#f2f2f2" size={70} />
      </div>
    </Content>
  );
}
