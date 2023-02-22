import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-hot-toast";
import { SET_CACHE } from "../constant";

const get = async (cacheKey: string) => {
  let res = await fetch(SET_CACHE + "?key=" + cacheKey);
  return res.json();
};

type Props = {
  cacheKey: string;
  cacheName?: string;
  cacheExpiredAt?: string;
  isId?: boolean;
};

const CacheCard = ({ cacheKey, cacheName, cacheExpiredAt, isId }: Props) => {
  const { isLoading, isError, isSuccess, data, refetch } = useQuery(
    [cacheKey],
    () => get(cacheKey),
    { staleTime: Infinity, enabled: false }
  );

  const [query, setQuery] = useState<string>("");

  if (isSuccess) {
    toast.success("Successfully cached!");
  }

  if (isError) {
    toast.error("Failed to reset cache!");
  }

  return (
    <div className="flex space-x-2 justify-between items-center rounded-xl bg-white dark:bg-gray-700 p-4 shadow-lg ">
      <div className="flex space-x-2 items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </div>

        <div className="w-40 sm:w-full md:w-full lg:w-full overflow-hidden">
          <h2 className="font-semibold dark:text-gray-200">{cacheName}</h2>
          <p className="w-full text-sm text-red-500 bg-gray-100 dark:bg-gray-800 px-3 py-2 my-2">
            <code>{cacheKey}</code>
          </p>
          {/* <p className="mt-2 text-sm text-gray-500">Last opened 4 days ago</p> */}
          {isId && (
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-lg">ID:</span>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-1"
                type="text"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => refetch()}
          className="w-10 h-10 flex items-center justify-center bg-green-200 outline-none border-green-500 border text-gray-700 rounded-full group hover:bg-green-500 hover:text-white hover:border-transparent active:scale-95 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed focus:text-white focus:border-transparent focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:bg-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${isLoading && "animate-spin"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default CacheCard;
