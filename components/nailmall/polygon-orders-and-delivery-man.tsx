import { useEffect, useState } from "react";
import { useQuery } from "react-query";

async function getOrdersAndDeliveryMan(
  polygonId: number
): Promise<IOrderResponse | undefined> {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/v1/order/orders-and-delivery-man-by-polygon?polygonId=${polygonId}`
    );
    if (!res.ok) throw new Error("failed to fetch map settings.");
    return await res.json();
  } catch (_) {
    return;
  }
}

type Props = {
  polygon: IPolygon;
};

export default function PolygonOrdersAndDeliveryMan({ polygon }: Props) {
  // const [orders, setOrders] = useState<IOrder[]>([]);
  const [selectedOrderList, setSelectedOrderList] = useState<IOrder[]>([]);
  // const [selectedDManList, setSelectedDManList] = useState<IDeliveryMan[]>([]);
  const [selectedDMan, setSelectedDMan] = useState<IDeliveryMan>();

  const query = useQuery({
    queryKey: ["orders-and-delivery-man", polygon.polygonId],
    queryFn: () => getOrdersAndDeliveryMan(polygon.polygonId),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setSelectedOrderList(query.data?.orders ?? []);
    // setSelectedDManList(query.data?.deliveryManList ?? []);
  }, [query.data]);

  const handleSelectOrder = (value: boolean, id: number) => {
    const order = query.data?.orders.find((o) => o.id == id);
    const filter = selectedOrderList.filter((o) => o.id != id);
    if (value && order) {
      setSelectedOrderList([...selectedOrderList, order]);
    } else {
      setSelectedOrderList([...filter]);
    }
  };

  const handleSelectDMan = (value: boolean, id: number) => {
    const dman = query.data?.deliveryManList.find((d) => d.id == id);
    value ? setSelectedDMan(dman) : setSelectedDMan(undefined);
    // const filter = selectedDManList.filter((d) => d.id != id);
    // if (value && dman) {
    //   setSelectedDManList([...selectedDManList, dman]);
    // } else {
    //   setSelectedDManList([...filter]);
    // }
  };

  console.log("selectedOrderList", selectedOrderList);

  return (
    <div className="">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3 border">
              Order List
            </th>
            <th scope="col" className="px-4 py-3 border">
              Delivery Person
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="border">
              <div className="overflow-y-auto max-h-80 px-4 py-4">
                <ul className="max-w-md divide-y divide-gray-200">
                  {query.data &&
                    query.data?.orders.map((order: IOrder) => (
                      <OrderListItem
                        order={order}
                        checked={
                          !!selectedOrderList.find((d) => d.id == order.id)
                        }
                        onChange={handleSelectOrder}
                        key={order.id}
                      />
                    ))}
                </ul>
              </div>
            </td>
            <td className="border">
              <div className="overflow-y-auto max-h-80 px-4 py-4">
                <ul className="max-w-md divide-y divide-gray-200">
                  {query.data &&
                    query.data?.deliveryManList.map((dman: IDeliveryMan) => (
                      <DeliveryManListItem
                        dman={dman}
                        checked={selectedDMan?.id == dman.id}
                        onChange={handleSelectDMan}
                        key={dman.id}
                      />
                    ))}
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <td scope="col" className="px-4 py-3 border">
              Total Time:
            </td>
            <td scope="col" className="px-4 py-3 border" rowSpan={2}>
              Assign
            </td>
          </tr>
          <tr>
            <td scope="col" className="px-4 py-3 border">
              Total Distance:
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

type OrderListItemProps = {
  order: IOrder;
  checked: boolean;
  onChange: (value: boolean, id: number) => void;
};

function OrderListItem({ order, checked, onChange }: OrderListItemProps) {
  return (
    <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0">
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={checked}
            onChange={(e) => onChange(e.target.checked, order.id)}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            Order Id: {order.id}
          </p>
          <p className="text-sm text-gray-500 truncate">{order.created_at}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900">
          ${order.order_amount}
        </div>
      </div>
    </li>
  );
}

type DeliveryManListItemProps = {
  dman: IDeliveryMan;
  checked: boolean;
  onChange: (value: boolean, id: number) => void;
};

function DeliveryManListItem({
  dman,
  checked,
  onChange,
}: DeliveryManListItemProps) {
  return (
    <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0">
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={checked}
            onChange={(e) => onChange(e.target.checked, dman.id)}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {dman.f_name} {dman.l_name}
          </p>
          <p className="text-sm text-gray-500 truncate">{dman.email}</p>
        </div>
      </div>
    </li>
  );
}
