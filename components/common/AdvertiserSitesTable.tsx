"use client";

import { useEffect, useState } from "react";
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
import { AddSiteDialog } from "@/components/common/AddSiteDialog";
import Image from "next/image";
import Link from "next/link";
import { useFilterState } from "@/store/filter";
import { NewLinkRequestButton } from "./NewLinkRequestButton";
import { NewLinkRequestDialog } from "./NewLinkRequestDialog";

interface FilterStore {
  minPrice: number;
  maxPrice: number;
  minTraffic: number;
  maxTraffic: number;
  minDR: number;
  maxDR: number;
  niche: string;
  county: string;
  linkTYpe: string;
  updateMinPrice: (num: number) => void;
  updateMaxPrice: (num: number) => void;
  updateMinTraffic: (num: number) => void;
  updateMaxTraffic: (num: number) => void;
  updateMinDR: (num: number) => void;
  updateMaxDR: (num: number) => void;
}

async function getAdvertiserSites(
  niche: string,
  country: string,
  linkType: string,
  minPrice: number,
  maxPrice: number,
  minTraffic: number,
  maxTraffic: number,
  minDR: number,
  maxDR: number
) {
  const myHeaders = new Headers();

  let url = "http://127.0.0.1:8000/api/sites/";
  let queryParams = [];

  if (niche) {
    queryParams.push(`niche=${niche}`);
  }

  if (linkType) {
    queryParams.push(`linkType=${linkType}`);
  }

  if (country) {
    queryParams.push(`country=${country}`);
  }

  if (minPrice) {
    queryParams.push(`price_per_link_min=${minPrice}`);
  }

  if (maxPrice) {
    queryParams.push(`price_per_link_max=${maxPrice}`);
  }

  if (maxTraffic) {
    queryParams.push(`organic_traffic_max=${maxTraffic}`);
  }

  if (minTraffic) {
    queryParams.push(`organic_traffic_min=${minTraffic}`);
  }

  if (maxDR) {
    queryParams.push(`domain_authority_max=${maxDR}`);
  }

  if (minDR) {
    queryParams.push(`domain_authority_min=${minDR}`);
  }

  if (queryParams.length > 0) {
    url += "?" + queryParams.join("&");
  }

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const res = await fetch(url, requestOptions);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function AdvertiserSitesTable() {
  const minPrice = useFilterState((state: FilterStore) => state.minPrice);
  const maxPrice = useFilterState((state: FilterStore) => state.maxPrice);
  const minTraffic = useFilterState((state: FilterStore) => state.minTraffic);
  const maxTraffic = useFilterState((state: FilterStore) => state.maxTraffic);
  const minDR = useFilterState((state: FilterStore) => state.minDR);
  const maxDR = useFilterState((state: FilterStore) => state.maxDR);

  const niche = useFilterState((state: FilterStore) => state.niche);
  const country = useFilterState((state: FilterStore) => state.country);
  const linkType = useFilterState((state: FilterStore) => state.linkType);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const data = await getAdvertiserSites(
          niche,
          country,
          linkType,
          minPrice,
          maxPrice,
          minDR,
          maxDR,
          minTraffic,
          maxTraffic
        );
        setSites(data);
      } catch (error) {
        console.error("Error fetching sites:", error);
      }
    };
    fetchSites();
  }, [
    minPrice,
    maxPrice,
    niche,
    minDR,
    maxDR,
    minTraffic,
    maxTraffic,
    country,
    linkType,
  ]);

  console.log("ALL SITES", sites);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  {/* Table header */}
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price(USD) {minPrice}
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
                  {sites?.map((site) => (
                    <tr key={site.id}>
                      {/* Table rows */}
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
                        <NewLinkRequestButton />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <NewLinkRequestDialog />
    </div>
  );
}
