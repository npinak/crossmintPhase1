import axios from "axios";
import { candidateId, baseURL } from "./constants.js";
import { wait } from "./utility.js";
import { createPolyanets, deletePolyanets } from "./polyanets.js";

export const getMap = async () => {
  const response = await axios
    .get(`${baseURL}/map/${candidateId}/goal`)
    .catch((err) => console.error(err));

  return response.data;
};

export const createMap = async (map) => {
  for (let row = 0; row < map.goal.length; row++) {
    for (let column = 0; column < map.goal[row].length; column++) {
      if (map.goal[row][column] === "POLYANET") {
        createPolyanets(row, column);
        await wait(1000);
      } else {
        deletePolyanets(row, column);
        await wait(1000);
      }
    }
  }
};
