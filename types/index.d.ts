type ILocation = {
  lat: number;
  lng: number;
};

type IRadiusItem = { radius: number; mile: string; color: string };

type IPolygonSettings = {
  id: number;
  lat: string;
  lng: string;
  radiusList: IRadiusItem[];
  status: number;
  created_at: string;
  updated_at: string;
};

type IPolygon = {
  polygonId: number;
  polygon_settings_id: number;
  radius: number;
  name?: string;
  coordinates: ILocation[];
};

type IOrder = {
  id: number;
  shipping_address_data: {
    id: number;
    customer_id: string;
    is_guest: boolean;
    contact_person_name: string;
    email?: string;
    address_type: string;
    address: string;
    city: string;
    zip: string;
    phone: string;
    created_at?: string;
    updated_at?: string;
    state?: string;
    country: string;
    latitude: string;
    longitude: string;
    is_billing: boolean;
  };
};

type IDeliveryMan = {
  id: number;
  latitude: number;
  longitude: number;
};

type IMapConfig = {
  polygonSettings: IPolygonSettings;
  polygonsList: IPolygon[];
  orders: IOrder[];
  deliveryManList: IDeliveryMan[];
};
