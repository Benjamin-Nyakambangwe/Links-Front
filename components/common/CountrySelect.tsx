"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFilterState } from "@/store/filter";

interface FilterStore {
  country: string;
  updateCountry: (str: string) => void;
}

const countries = [
  {
    value: "United States",
    label: "United States",
  },
  {
    value: "China",
    label: "China",
  },
  {
    value: "India",
    label: "India",
  },
  {
    value: "Japan",
    label: "Japan",
  },
  {
    value: "Germany",
    label: "Germany",
  },
  {
    value: "United Kingdom",
    label: "United Kingdom",
  },
  {
    value: "France",
    label: "France",
  },
  {
    value: "Italy",
    label: "Italy",
  },
  {
    value: "Brazil",
    label: "Brazil",
  },
  {
    value: "Canada",
    label: "Canada",
  },
  {
    value: "South Korea",
    label: "South Korea",
  },
  {
    value: "Russia",
    label: "Russia",
  },
  {
    value: "Australia",
    label: "Australia",
  },
  {
    value: "Spain",
    label: "Spain",
  },
  {
    value: "Mexico",
    label: "Mexico",
  },
  {
    value: "Indonesia",
    label: "Indonesia",
  },
  {
    value: "Turkey",
    label: "Turkey",
  },
  {
    value: "Netherlands",
    label: "Netherlands",
  },
  {
    value: "Saudi Arabia",
    label: "Saudi Arabia",
  },
  {
    value: "Switzerland",
    label: "Switzerland",
  },
  {
    value: "Poland",
    label: "Poland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Belgium",
    label: "Belgium",
  },
  {
    value: "Thailand",
    label: "Thailand",
  },
  {
    value: "Argentina",
    label: "Argentina",
  },
];

export default function CountrySelect({ selectedCountry, onCountrySelect }) {
  const [open, setOpen] = useState(false);
  const updateCountry = useFilterState(
    (state: FilterStore) => state.updateCountry
  );

  const handleCountrySelect = (country) => {
    onCountrySelect(country === selectedCountry ? null : country);
    updateCountry(country);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedCountry
            ? countries.find((country) => country.value === selectedCountry)
                ?.label
            : "Select country..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={handleCountrySelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCountry === country.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
