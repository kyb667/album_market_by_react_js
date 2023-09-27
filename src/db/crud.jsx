import axios from "axios";
import { Url } from "../common/common";

const url = Url;
// const url = "https://jsonplaceholder.typicode.com"

export const getAllData = async (tableName) => {
  let data = {};
  data = await axios.get(`${url}/${tableName}`);
  return data;
};

export const getData = async (tableName, filterName, filterValue) => {
  let data = {};
  data = await axios.get(`${url}/${tableName}?${filterName}=${filterValue}`);
  return data;
};

export const createFetch = async (tableName, data) => {
  // console.log("createFetch start");
  let res = await axios.post(`${url}/${tableName}`, data);
  return res;
};
