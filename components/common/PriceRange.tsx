"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCheck } from "lucide-react";
import { useFilterState } from "@/store/filter";

interface FilterStore {
  minPrice: number;
  maxPrice: number;
  updateMinPrice: (num: number) => void;
  updateMaxPrice: (num: number) => void;
}

const PriceRange = ({ minPrice, maxPrice }) => {
  const [min, setMin] = useState(minPrice || "");
  const [max, setMax] = useState(maxPrice || "");

  const updateMinPrice = useFilterState(
    (state: FilterStore) => state.updateMinPrice
  );
  const updateMaxPrice = useFilterState(
    (state: FilterStore) => state.updateMaxPrice
  );

  const handleApply = () => {
    updateMinPrice(min);
    updateMaxPrice(max);
  };

  return (
    <div>
      <h3 className="m-2">Cost</h3>
      <div className="flex justify-around">
        <Input
          type="number"
          placeholder="min"
          className="w-16 mr-1"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <Input
          type="number"
          placeholder="max"
          className="w-16 mr-1"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
        <Button variant="outline" size="icon" onClick={handleApply}>
          <CheckCheck className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PriceRange;
