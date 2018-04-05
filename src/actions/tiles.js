import { createActions } from "redux-actions";

export const { initTilesRequest, moveTilesRequest } = createActions({
  INIT_TILES_REQUEST: null,
  MOVE_TILES_REQUEST: null
});
