import { UsePokemon } from "../data/UsePokemon ";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = [true];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} algo estas haciendo mal`);
  }

  //   return heroes.filter((heroe) => heroe.publisher == publisher);
};
