import { candidateId, baseURL } from "./constants.js";
import axios from "axios";

export const createPolyanets = (row, column) => {
  axios
    .post(`${baseURL}/polyanets`, {
      header: {
        "Content-Type": "application/json",
      },
      body: {
        candidateId,
        row,
        column,
      },
    })
    .catch((err) => console.error(err));
};

export const deletePolyanets = (row, column) => {
  axios
    .delete(`${baseURL}/polyanets`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        candidateId,
        row,
        column,
      },
    })
    .catch((err) => console.error(err));
};
