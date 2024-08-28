import {
  Dice1,
  Trophy,
  Banknote,
  Heart,
  BarChart2,
  Bitcoin,
  Settings,
  BadgeDollarSign,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { cookies } from "next/headers";
import { AddSiteDialog } from "@/components/common/AddSiteDialog";
import { AddSiteButton } from "./AddSiteButton";
import Image from "next/image";
import Link from "next/link";

async function getPublisherSites() {
  const token = cookies().get("access")?.value;
  console.log(token);
  const myHeaders = new Headers();
  myHeaders.append("Cookie", `access=${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const res = await fetch(
    "http://127.0.0.1:8000/api/own-sites/",
    requestOptions
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PublisherSitesTable() {
  const sites = await getPublisherSites();

  console.log("PERSONAL SITES", sites);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Websites
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the sites in your account including their details.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {/* <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add New Site
          </button> */}
          <AddSiteButton />
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
                      Price(USD)
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Traffic
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      DR
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Niche
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Supports
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {sites.map((site) => (
                    <tr key={site.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <Button variant="outline" className="w-3/4">
                          <BadgeDollarSign className="mr-2 h-4 w-4" />{" "}
                          {site.price_per_link}
                        </Button>
                      </td>
                      <td className=" flex items-center whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <Image
                          src={`https://www.google.com/s2/favicons?domain=${site.domain}&sz=128`}
                          width={30}
                          height={30}
                          alt="logo"
                          className="mr-2"
                        />
                        {site.name}
                        <Link href={site.domain} target="_blank">
                          <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {site.organic_traffic}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {site.domain_authority}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        US (70%)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {site.niche.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 mt-3 text-sm text-gray-400 flex justify-evenly items-center">
                        {site.support_casino ? (
                          <Dice1 size={14} className="text-green-500" />
                        ) : (
                          <Dice1 size={14} />
                        )}
                        <Trophy size={14} />
                        <Banknote size={14} />
                        <Heart size={14} />
                        <BarChart2 size={14} />
                        <Bitcoin size={14} />
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Button>
                          <Settings className="mr-2 h-4 w-4" /> Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddSiteDialog />
    </div>
  );
}
