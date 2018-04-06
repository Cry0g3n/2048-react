import { handleActions } from "redux-actions";

import {
  initTilesRequest,
  moveTilesRequest,
  updateTilesRequest
} from "../actions/tiles";
import initTiles from "../logic/initTiles";
import { moveTiles } from "../logic/moveTiles";
import { updateTiles } from "../logic/updateTiles";

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
    }),
    [updateTilesRequest]: (state, action) => ({
      ...state,
      tiles: updateTiles(state.tiles)
    })
  },
  initialState
);

export const getTiles = state => state.tiles.tiles;
