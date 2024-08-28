"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import DomainRatingRange from "./DomainRatingRange";
import NicheSelect from "./NicheSelect";
import CountrySelect from "./CountrySelect";
import LinkTypeSelect from "./LinkTypeSelect";
import TrafficRange from "./TrafficRange";
import PriceRange from "./PriceRange";

const MegaFilter = () => {
  const [niche, setNiche] = React.useState(null);
  const [country, setCountry] = React.useState(null);
  const [linkType, setLinkType] = React.useState(null);
  const [minPrice, setMinPrice] = React.useState(null);
  const [maxPrice, setMaxPrice] = React.useState(null);
  const [minTraffic, setMinTraffic] = React.useState(null);
  const [maxTraffic, setMaxTraffic] = React.useState(null);
  const [minDR, setMinDR] = React.useState(null);
  const [maxDR, setMaxDR] = React.useState(null);

  const handleTrafficRangeChange = (min, max) => {
    setMinTraffic(min);
    setMaxTraffic(max);
  };

  const handleDRRangeChange = (min, max) => {
    setMinDR(min);
    setMaxDR(max);
  };

  const handlePriceRangeChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleNicheSelect = (selectedNiche) => {
    setNiche(selectedNiche);
  };

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  const handleLinkTypeSelect = (selectedLinkType) => {
    setLinkType(selectedLinkType);
  };
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex justify-between">
          <div>
            <h3 className="m-2">Niche</h3>
            <NicheSelect
              selectedNiche={niche}
              onNicheSelect={handleNicheSelect}
            />
          </div>
          <div>
            <h3 className="m-2">Country</h3>
            <CountrySelect
              selectedCountry={country}
              onCountrySelect={handleCountrySelect}
            />
          </div>
          <div>
            <h3 className="m-2">Link Type</h3>
            <LinkTypeSelect
              selectedLinkType={linkType}
              onLinkTypeSelect={handleLinkTypeSelect}
            />
          </div>

          <DomainRatingRange
            minDR={minDR}
            maxDR={maxDR}
            onDRRangeChange={handleDRRangeChange}
          />
          <TrafficRange
            minTraffic={minTraffic}
            maxTraffic={maxTraffic}
            onTrafficRangeChange={handleTrafficRangeChange}
          />
          <PriceRange
            minPrice={minPrice}
            maxPrice={maxPrice}
            onPriceRangeChange={handlePriceRangeChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MegaFilter;
