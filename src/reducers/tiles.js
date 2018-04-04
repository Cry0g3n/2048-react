import { handleActions } from "redux-actions";

import { initTilesRequest } from "../actions/tiles";
import initTiles from "../logic/initTiles";

const initialState = {
  tiles: []
};

export default handleActions(
  {
    [initTilesRequest]: (state, action) => ({
      ...state,
      tiles: initTiles()
    })
  },
  initialState
);

export const getTiles = state => state.tiles.tiles;
