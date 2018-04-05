import { uniqueId } from "lodash";

const tileStates = {
  IDLE: "IDLE",
  MOVING: "MOVING",
  DYING: "DYING",
  INCREASE: "INCREASE"
};

const create = (x, y, value, id) => ({
  x,
  y,
  value,
  id: id ? id : uniqueId(),
  state: tileStates.IDLE
});

export { create, tileStates };
