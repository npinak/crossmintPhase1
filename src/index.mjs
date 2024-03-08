import "./styles.css";
import { getMap, createMap } from "./utils/mapFunctions";

async function setMap() {
  const map = await getMap();
  createMap(map);
}

setMap();
