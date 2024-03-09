import { getMap, createMap } from "./utils/mapFunctions.js";

async function setMap() {
  const map = await getMap();
  createMap(map);
}

setMap();
