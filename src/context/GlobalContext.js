import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const state = {
    data,
    setData,
    currentId,
    setCurrentId,
  };

  const fetchAllData = async () => {
    const res = await axios({
      method: "GET",
      url: "https://dummyjson.com/products",
    });
    setData(res.data);
  };

  const fetchDetailData = async () => {
    const res = await axios({
      method: "GET",
      url: "https://dummyjson.com/products",
    });
    const filtered = res?.data?.products?.filter(
      (el) => el?.id === Number(currentId)
    );
    console.log(filtered);
    setData(filtered[0]);
  };

  const handleDetail = (e) => {
    const id = e.target.getAttribute("data-id");
    setCurrentId(id);
    navigate(`/detail/${id}`);
  };

  const handleFunction = {
    fetchAllData,
    fetchDetailData,
    handleDetail,
  };

  return (
    <GlobalContext.Provider value={{ state, handleFunction }}>
      {children}
    </GlobalContext.Provider>
  );
};
