"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
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
  niche: string;
  updateNiche: (str: string) => void;
}

const ComboboxDemo = ({ selectedNiche, onNicheSelect }) => {
  const [open, setOpen] = useState(false);
  const updateNiche = useFilterState((state: FilterStore) => state.updateNiche);

  const handleNicheSelect = (niche) => {
    onNicheSelect(niche === selectedNiche ? null : niche);
    updateNiche(niche);
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
          {selectedNiche
            ? niches.find((niche) => niche.value === selectedNiche)?.label
            : "Select niche..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search niche..." />
          <CommandList>
            <CommandEmpty>No niche found.</CommandEmpty>
            <CommandGroup>
              {niches.map((niche) => (
                <CommandItem
                  key={niche.value}
                  value={niche.value}
                  onSelect={handleNicheSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedNiche === niche.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {niche.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ComboboxDemo;

const niches = [
  {
    value: 1,
    label: "Education",
  },
  {
    value: 2,
    label: "Travel",
  },
  {
    value: 3,
    label: "Gaming",
  },
  {
    value: 4,
    label: "Healthcare",
  },
  {
    value: 5,
    label: "Finance",
  },
  {
    value: 6,
    label: "Fashion",
  },
  {
    value: 7,
    label: "Fitness",
  },
  {
    value: 8,
    label: "Food & Cooking",
  },
  {
    value: 9,
    label: "Personal Development",
  },
  {
    value: 10,
    label: "Technology",
  },
  {
    value: 11,
    label: "Parenting",
  },
  {
    value: 12,
    label: "Home & Garden",
  },
  {
    value: 13,
    label: "Business",
  },
  {
    value: 14,
    label: "Lifestyle",
  },
  {
    value: 15,
    label: "Sports",
  },
  {
    value: 16,
    label: "Arts & Culture",
  },
];
