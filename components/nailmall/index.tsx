import { useRef } from "react";
import { useQuery } from "react-query";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";
import ResizableDiv from "./ResizeableDiv";
import Loader from "./loader";
import MapSettings from "./map-settings";
import MyGoogleMap from "./my-google-map";
import PolygonOrdersAndDeliveryMan from "./polygon-order-and-dman";

async function getConfig(): Promise<IMapConfig | undefined> {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/mapapi/config`);
    if (!res.ok) throw new Error("failed to fetch map settings.");
    return await res.json();
  } catch (_) {
    return;
  }
}

export default function NailMall() {
  const query = useQuery({
    queryKey: ["map-config"],
    queryFn: getConfig,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth / 1.5;
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth / 1.5;
    }
  };

  return (
    <div className="min-h-screen h-full bg-gray-100">
      {query.isLoading && (
        <Loader className="min-h-screen h-full flex justify-center items-center" />
      )}
      <ResizableDiv minHeight={200} initialHeight={500}>
        {!query.isLoading && query.data && <MyGoogleMap config={query.data} />}
      </ResizableDiv>

      <MapSettings />

      <div className="my-2 p-4">
        <div className="relative w-full h-full">
          <div className="absolute left-0 h-full flex items-center justify-start">
            <button
              type="button"
              className="bg-gray-50 hover:bg-blue-500 hover:text-white text-primary-600 p-2 border rounded-full"
              onClick={handleScrollLeft}
            >
              <ArrowBack classNames="w-6 h-6" />
            </button>
          </div>
          <div className="absolute right-0 h-full flex items-center justify-start">
            <button
              type="button"
              className="bg-gray-50 hover:bg-blue-500 hover:text-white text-primary-600 p-2 border rounded-full"
              onClick={handleScrollRight}
            >
              <ArrowNext classNames="w-6 h-6" />
            </button>
          </div>
          <div className="px-12">
            <div
              className="w-full flex flex-nowrap gap-5 overflow-x-auto scrollbar-hide scroll-smooth p-2 bg-gray-10"
              ref={sliderRef}
            >
              <PolygonOrdersAndDeliveryMan />
              <PolygonOrdersAndDeliveryMan />
              <PolygonOrdersAndDeliveryMan />
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}
