import { handleActions } from "redux-actions";

import { initTilesRequest, moveTilesRequest } from "../actions/tiles";
import initTiles from "../logic/initTiles";
import { moveTiles } from "../logic/moveTiles";

const initialState = {
  tiles: []
};

export default handleActions(
  {
    [initTilesRequest]: (state, action) => ({
      ...state,
      tiles: initTiles()
    }),
    [moveTilesRequest]: (state, action) => ({
      ...state,
      tiles: moveTiles(state.tiles, action.payload.direction)
    })
  },
  initialState
);

export const getTiles = state => state.tiles.tiles;
