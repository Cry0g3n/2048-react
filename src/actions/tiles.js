import { createActions } from "redux-actions";

export const {
  initTilesRequest,
  moveTilesRequest,
  updateTilesRequest
} = createActions({
  INIT_TILES_REQUEST: null,
  MOVE_TILES_REQUEST: null,
  UPDATE_TILES_REQUEST: null
});
