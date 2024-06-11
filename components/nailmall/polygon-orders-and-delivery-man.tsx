type Props = {
  polygon: IPolygon;
};
export default function PolygonOrdersAndDeliveryMan({ polygon }: Props) {
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
                  <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <input type="checkbox" className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          email@flowbite.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $320
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <input type="checkbox" className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          email@flowbite.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $3467
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
            <td className="border">
              <div className="overflow-y-auto max-h-80 px-4 py-4">
                <ul className="max-w-md divide-y divide-gray-200">
                  <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <input type="checkbox" className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          email@flowbite.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <input type="checkbox" className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          email@flowbite.com
                        </p>
                      </div>
                    </div>
                  </li>
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
