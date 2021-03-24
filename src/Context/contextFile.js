import React, { createContext, useReducer, useState } from "react";
import axios from "axios";
import MyReducer from "../Reducer/reducerFile";

const initial_state = {
  list: [],
};

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MyReducer, initial_state);
  const [loader, setLoader] = useState(false);

  //get api for first time page load
  const spaceX = async () => {
    setLoader(true);
    try {
      const result = await axios(
        "https://api.spaceXdata.com/v3/launches?limit=100"
      );
      state.list = result.data;
      setLoader(false);
      return dispatch({
        type: "SPACE_X_DATA",
        payload: state.list,
        loader: loader,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //all filter
  const allFilter = async (launch, land, year) => {
    try {
      const result = await axios(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`
      );
      state.list = result.data;
      return dispatch({ type: "ALL_FILTER", payload: state.list });
    } catch (error) {
      console.log(error);
    }
  };

  //Launch and land filter
  const launchLandFilter = async (launch, land) => {
    try {
      const result = await axios(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}`
      );
      state.list = result.data;
      return dispatch({ type: "LAUNCH_LAND__FILTER", payload: state.list });
    } catch (error) {
      console.log(error);
    }
  };

  //Launch filter
  const launch = async (launch) => {
    try {
      const result = await axios(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success= ${launch}`
      );
      state.list = result.data;
      return dispatch({ type: "LAUNCH_FILTER", payload: state.list });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyContext.Provider
      value={{
        spaceX,
        allFilter,
        launchLandFilter,
        launch,
        list: state.list,
        loader: loader,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
