import { tileStates } from "./tileManager";
function updateTiles(tiles) {
  return tiles.filter(tile => tile.state !== tileStates.DYING).map(tile => {
    if (tile.state === tileStates.INCREASE) {
      tile.value *= 2;
    }

    tile.state = tileStates.IDLE;

    return tile;
  });
}

export { updateTiles };
