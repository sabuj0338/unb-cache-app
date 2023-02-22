import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import CircleProgressIndicator from "../CircleProgressIndicator";
import { GET_CACHE_KEYS } from "../constant";
import CacheCard from "./cacheCard";
import ClearAllCard from "./clearAllCard";

interface KeyInterface {
  title?: string;
  key: string;
  isParamsRequired: boolean;
  paramKeys: string[];
}

type Props = {
  data: KeyInterface[];
};

const get = async () => {
  // Fetch data from external API
  const res = await fetch(GET_CACHE_KEYS);
  const result = await res.json();

  // Pass data to the page via props
  return result.data;
};

const UNB = () => {
  const { isLoading, isError, isSuccess, data, refetch } = useQuery(
    ["cacheKeys"],
    () => get(),
    { staleTime: Infinity }
  );

  if (isLoading) {
    return (
      <div className="h-screen dark:bg-gray-900 dark:text-gray-200">
        <CircleProgressIndicator />
      </div>
    );
  }

  return (
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="mb-4 text-2xl font-bold font-roboto dark:text-gray-200">
          Manage Redis Cache
        </h2>

        <ClearAllCard />

        <div className="mt-4 w-full grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          
          {data &&
            data.map((item: KeyInterface, index: number) => {
              return (
                <CacheCard
                  cacheKey={item.toString()}
                  cacheName={item.toString()}
                  key={index}
                />
              );
            })}
        </div>
      </div>
  );
};

export default UNB;
