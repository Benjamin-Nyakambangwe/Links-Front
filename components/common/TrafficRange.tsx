"use client";

import { useState } from "react";
import { CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFilterState } from "@/store/filter";

interface FilterStore {
  minTraffic: number;
  maxTraffic: number;
  updateMinTraffic: (num: number) => void;
  updateMaxTraffic: (num: number) => void;
}

const TrafficRange = ({ minTraffic, maxTraffic }) => {
  const [min, setMin] = useState(minTraffic || "");
  const [max, setMax] = useState(maxTraffic || "");

  const updateMinTraffic = useFilterState(
    (state: FilterStore) => state.updateMinTraffic
  );
  const updateMaxTraffic = useFilterState(
    (state: FilterStore) => state.updateMaxTraffic
  );

  const handleApply = () => {
    updateMinTraffic(min);
    updateMaxTraffic(max);
  };
  return (
    <div>
      <h3 className="m-2">Traffic</h3>
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

export default TrafficRange;
