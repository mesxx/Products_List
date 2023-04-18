import React, { useContext, useEffect } from "react";
import { Spinner, Card, Button } from "flowbite-react";

import { GlobalContext } from "../context/GlobalContext";

export default function Home() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data } = state;
  const { fetchAllData, handleDetail } = handleFunction;

  useEffect(() => {
    fetchAllData();
    // eslint-disable-next-line
  }, []);

  if (!data) {
    return (
      <div className="grid h-screen place-items-center">
        <Spinner aria-label="Center-aligned spinner example" size="xl" />
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-10 my-5">
        {data?.products?.map((el) => {
          return (
            <>
              <Card className="mt-4 max-w">
                <img
                  className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
                  src={el.thumbnail}
                  alt="description"
                  width="20%"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {el.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Button onClick={handleDetail} data-id={el?.id}>
                  Detail
                </Button>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
