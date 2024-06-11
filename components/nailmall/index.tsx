import { useState } from "react";
import { useQuery } from "react-query";
import ResizableDiv from "./ResizeableDiv";
import CustomSlider from "./custom-slider";
import Loader from "./loader";
import MapSettings from "./map-settings";
import MyGoogleMap from "./my-google-map";
import PolygonOrdersAndDeliveryMan from "./polygon-orders-and-delivery-man";

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
  const [selectedPolygonList, setSelectedPolygonList] = useState<IPolygon[]>(
    []
  );

  const query = useQuery({
    queryKey: ["map-config"],
    queryFn: getConfig,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const handleSelectPolygon = (list: IPolygon[]) =>
    setSelectedPolygonList(list);

  if (query.isLoading) {
    return (
      <Loader className="min-h-screen h-full flex justify-center items-center" />
    );
  }

  return (
    <div className="min-h-screen h-full bg-gray-100">
      <ResizableDiv minHeight={200} initialHeight={500}>
        {query.data && (
          <MyGoogleMap
            config={query.data}
            selectedPolygonList={selectedPolygonList}
            setSelectedPolygonList={handleSelectPolygon}
          />
        )}
      </ResizableDiv>

      <MapSettings callback={query.refetch}/>

      <div className="my-2 p-4">
        <CustomSlider>
          {selectedPolygonList.map((polygon: IPolygon) => (
            <PolygonOrdersAndDeliveryMan polygon={polygon} key={polygon.polygonId}/>
          ))}
        </CustomSlider>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}
