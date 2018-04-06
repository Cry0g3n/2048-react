import { handleActions } from "redux-actions";

import {
  initTilesRequest,
  moveTilesRequest,
  populateFieldRequest,
  updateTilesRequest
} from "../actions/tiles";
import initTiles from "../logic/initTiles";
import { moveTiles } from "../logic/moveTiles";
import { updateTiles } from "../logic/updateTiles";
import { populateField } from "../logic/populateField";

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
    }),
    [populateFieldRequest]: (state, action) => ({
      ...state,
      tiles: populateField(state.tiles)
    })
  },
  initialState
);

export const getTiles = state => state.tiles.tiles;
