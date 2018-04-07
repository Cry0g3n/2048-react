import { tileStates } from "./tileManager";

function updateTiles(tiles) {
  let score = 0;
  const nextTiles = tiles.filter(tile => tile.state !== tileStates.DYING).map(tile => {
    if (tile.state === tileStates.INCREASE) {
      tile.value *= 2;
      score += tile.value;
    }

    tile.state = tileStates.IDLE;
    return tile;
  });

  return {
    nextTiles,
    score
  }
}

export { updateTiles };
