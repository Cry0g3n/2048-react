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
      tiles: initTiles(),
      score: 0
    }),
    [moveTilesRequest]: (state, action) => ({
      ...state,
      tiles: moveTiles(state.tiles, action.payload.direction)
    }),
    [updateTilesRequest]: (state, action) => ({
      ...state,
      tiles: updateTiles(state.tiles)
    }),
    [updateTilesRequest]: (state, action) => {
      const {nextTiles, score} = updateTiles(state.tiles);
      return {
        ...state,
        tiles: nextTiles,
        score: state.score + score
      }
    },
    [populateFieldRequest]: (state, action) => ({
      ...state,
      tiles: populateField(state.tiles)
    })
  },
  initialState
);

export const getTiles = state => state.tiles.tiles;
export const getScore = state => state.tiles.score;
