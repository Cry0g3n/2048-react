import { create } from "./tileManager";

function populateField(tiles) {
  const occupiedCoords = new Set();

  tiles.forEach(tile => {
    occupiedCoords.add(tile.x * 4 + tile.y);
  });

  if (occupiedCoords.size === 16) return;

  let x;
  let y;
  let startSize = occupiedCoords.size;
  do {
    x = Math.floor(Math.random() * 3.9);
    y = Math.floor(Math.random() * 3.9);

    const sum = x * 4 + y;
    occupiedCoords.add(sum);
  } while (startSize === occupiedCoords.size);

  return [...tiles, create(x, y, 2)];
}

export { populateField };
