"use client";

import { useState } from "react";
import { CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFilterState } from "@/store/filter";

interface FilterStore {
  minDR: number;
  maxDR: number;
  updateMinDR: (num: number) => void;
  updateMaxDR: (num: number) => void;
}

const DomainRatingRange = ({ minDR, maxDR }) => {
  const [min, setMin] = useState(minDR || "");
  const [max, setMax] = useState(maxDR || "");

  const updateMinDR = useFilterState((state: FilterStore) => state.updateMinDR);
  const updateMaxDR = useFilterState((state: FilterStore) => state.updateMaxDR);

  const handleApply = () => {
    updateMinDR(min);
    updateMaxDR(max);
  };
  return (
    <div>
      <h3 className="m-2">Domain Rating</h3>
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

export default DomainRatingRange;
