import React from "react";
import {
  ColorPokemon,
  TypePokemon,
} from "@service/pokemonservicecyclic/pokemoncyclicresponse/PokemonCyclicResponse";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import logopokemon from "@assets/d97gfvk-c4e26092-00c2-4835-8b04-97d417e05efd.png";

type props = {
  type: TypePokemon[];
};

const navpokemon: React.FC<props> = ({ type }) => {
  const navigate = useNavigate();

  return (
    <div>
      {type?.slice(0, 1).map((item) => (
        <>
          <div
            className="flex flex-row py-3 px-4 mb-5 pt-5"
            style={{
              backgroundColor: ColorPokemon[item],
            }}
          >
            <FontAwesomeIcon
              onClick={() => navigate("/pokemon")}
              className="bg-white rounded-full p-[10px] mr-3 cursor-pointer self-center w-[16px] h-[16px]"
              icon={faAngleLeft}
            />
            <img
              className="w-[200px] self-center rounded-lg px-3"
              style={{ backgroundColor: "#79797990" }}
              src={logopokemon}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default navpokemon;
