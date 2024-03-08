import { candidateId, baseURL } from "./constants.js";

export const createPolyanets = (row, column) => {
  axios
    .post(`${baseURL}/polyanets`, {
      candidateId,
      row,
      column,
    })
    .catch((err) => console.error(err));
};

export const deletePolyanets = (row, column) => {
  axios
    .delete(`${baseURL}/polyanets`, {
      data: {
        candidateId,
        row,
        column,
      },
    })
    .catch((err) => console.error(err));
};
