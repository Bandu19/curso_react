import { useParams } from "react-router";
import { UsePoki } from "../data/UsePoki";

export const PokiPages = () => {
  const { id } = useParams();
  const estado = UsePoki(id); // OBJETO

  return (
    <>
      <h1>Pokemon:</h1>
      <hr />

      {estado}
    </>
  );
};
