import {
  Settings,
  BadgeDollarSign,
  SquareArrowOutUpRight,
  Ellipsis,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import { AddSiteButton } from "@/components/common/AddSiteButton";
import Image from "next/image";
import Link from "next/link";
import { RequestsDropDown } from "@/components/common/RequestsDropdown";

// async function getPublisherSites() {
//   const token = cookies().get("access")?.value;
//   console.log(token);
//   const myHeaders = new Headers();
//   myHeaders.append("Cookie", `access=${token}`);

//   const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };
//   const res = await fetch(
//     "http://127.0.0.1:8000/api/own-sites/",
//     requestOptions
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function OrdersPage() {
  // const sites = await getPublisherSites();
  const cookieStore = cookies();
  const userType = cookieStore.get("user_details")?.value;
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Link Requests
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the link requests in your account including their
            status.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {/* <AddSiteButton /> */}
          {userType}
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Host Site
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Target Url
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      RequestStatus
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Payment
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      The Human Capital Hub
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                      www.ipcconsultants.com
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 ">
                      <p className="border-green-600 border-2 text-center p-2 rounded-2xl mx-9 text-green-600">
                        Request Sent
                      </p>
                    </td>

                    <td className="whitespace-nowrap py-4 pl-1 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <Button variant="outline" className="w-3/4">
                        <BadgeDollarSign className="mr-2 h-4 w-4" />
                        100
                      </Button>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                      <Ellipsis />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
