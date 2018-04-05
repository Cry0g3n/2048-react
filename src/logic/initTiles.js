import { create } from "./tileManager";

const initTiles = () => {
  const tile1 = create(getRandomCoord(), getRandomCoord(), 2);
  const tile2 = create(getRandomCoord(), getRandomCoord(), 2);

  if (tile1.x === tile2.x && tile1.y === tile2.y) {
    tile1.x = tile1.x === 0 ? 1 : tile1.x - 1;
  }

  return [tile1, tile2];
};

const getRandomCoord = () => {
  return Math.floor(Math.random() * 3.9);
};

export default initTiles;
