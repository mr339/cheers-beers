import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const getBeerData = createAsyncThunk(
  "beerData",
  async ({ currentPage, perPage }: any) => {
    const response = await axios.get(
      `${publicRuntimeConfig.apiURL}?page=${currentPage}&per_page=${perPage}`
    );
    if (response.status === 200) {
      return response.data;
    } else if (response.status === 401) {
      //unauthenticated
      // handleError
    } else {
      console.log(response.status);
    }
  }
);
