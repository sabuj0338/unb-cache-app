import { Library } from "@googlemaps/js-api-loader";
import {
  Circle,
  GoogleMap,
  Marker,
  Polygon,
  useJsApiLoader,
} from "@react-google-maps/api";
import Loader from "./loader";

// const libraries: Library[] = ["places", "drawing", "geometry", "visualization"];
const libraries: Library[] = ["places"];

const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? "";

type Props = {
  config: IMapConfig;
  selectedPolygonList: IPolygon[];
  setSelectedPolygonList: (p: IPolygon[]) => void;
};

export default function MyGoogleMap({
  config,
  selectedPolygonList,
  setSelectedPolygonList,
}: Props) {
  const centerPoint = {
    lat: +config.polygonSettings.lat,
    lng: +config.polygonSettings.lng,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
    libraries,
  });

  const handleClickPolygon = (polygon: IPolygon) => {
    const filter = selectedPolygonList.filter(
      (p) => p.polygonId != polygon.polygonId
    );
    if (selectedPolygonList.find((p) => p.polygonId == polygon.polygonId)) {
      setSelectedPolygonList([...filter]);
    } else {
      setSelectedPolygonList([...selectedPolygonList, polygon]);
    }
  };

  if (!isLoaded) return <Loader />;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={centerPoint}
      zoom={11}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      {config.polygonSettings.radiusList.map((radiusItem: IRadiusItem) => (
        <Circle
          center={centerPoint}
          radius={radiusItem.radius}
          options={{
            strokeColor: radiusItem.color,
            strokeOpacity: 0.6,
            strokeWeight: 5,
            fillColor: "transparent",
            fillOpacity: 0.15,
            clickable: false,
            draggable: false,
          }}
          key={radiusItem.radius}
        />
      ))}

      {config.polygonsList.map((polygonItem: IPolygon) => (
        <Polygon
          paths={polygonItem.coordinates}
          onClick={() => handleClickPolygon(polygonItem)}
          key={polygonItem.polygonId}
          options={{
            clickable: true,
            draggable: false,
            editable: false,
            fillColor: selectedPolygonList.find(
              (p) => p.polygonId == polygonItem.polygonId
            )
              ? "#4285F4"
              : "#ADFF2F",
            fillOpacity: 0.5,
          }}
        />
      ))}

      {config.deliveryManList.map((dMan: IDeliveryMan) => (
        <Marker
          position={{
            lat: dMan.latitude,
            lng: dMan.longitude,
          }}
          icon={{
            url: "http://127.0.0.1:8000/images/lorry.png",
            scaledSize: new google.maps.Size(40, 40),
          }}
          key={dMan.id}
        />
      ))}

      {config.orders.map((order: IOrder) => (
        <Marker
          position={{
            lat: +order.shipping_address_data.latitude,
            lng: +order.shipping_address_data.longitude,
          }}
          key={order.id}
        />
      ))}
    </GoogleMap>
  );
}
