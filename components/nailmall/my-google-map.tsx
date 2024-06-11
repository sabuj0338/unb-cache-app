import { Library } from "@googlemaps/js-api-loader";
import {
  Circle,
  GoogleMap,
  Marker,
  Polygon,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";
import Loader from "./loader";

// const libraries: Library[] = ["places", "drawing", "geometry", "visualization"];
const libraries: Library[] = ["places"];

type Props = {
  config: IMapConfig;
};

export default function MyGoogleMap({ config }: Props) {
  const centerPoint = {
    lat: +config.polygonSettings.lat,
    lng: +config.polygonSettings.lng,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyClMirnfPB4ntNp8BbCOFtN1t6a_vMpHFs",
    libraries,
  });

  const [selectedP, setSelectedP] = useState<number[]>([]);

  const handleClickPolygon = (polygonId: number) => {
    const filter = selectedP.filter((id) => id != polygonId);
    if (selectedP.includes(polygonId)) {
      setSelectedP([...filter]);
    } else {
      setSelectedP([...selectedP, polygonId]);
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
          onClick={() => handleClickPolygon(polygonItem.polygonId)}
          key={polygonItem.polygonId}
          options={{
            clickable: true,
            draggable: false,
            editable: false,
            fillColor: selectedP.includes(polygonItem.polygonId)
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
