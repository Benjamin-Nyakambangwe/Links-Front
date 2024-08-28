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
  linkType: string;
  updateLinkType: (str: string) => void;
}

const linkTypes = [
  {
    value: "no-follow",
    label: "No Follow",
  },
  {
    value: "do-follow",
    label: "Do Follow",
  },
];

export default function LinkTypeSelect({ selectedLinkType, onLinkTypeSelect }) {
  const [open, setOpen] = useState(false);
  const updateLinkType = useFilterState(
    (state: FilterStore) => state.updateLinkType
  );

  const handleLinkTypeSelect = (linkType) => {
    onLinkTypeSelect(linkType === selectedLinkType ? null : linkType);
    updateLinkType(linkType);
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
          {selectedLinkType
            ? linkTypes.find((linkType) => linkType.value === selectedLinkType)
                ?.label
            : "Select linkType..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search linkType..." />
          <CommandList>
            <CommandEmpty>No linkType found.</CommandEmpty>
            <CommandGroup>
              {linkTypes.map((linkType) => (
                <CommandItem
                  key={linkType.value}
                  value={linkType.value}
                  onSelect={handleLinkTypeSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedLinkType === linkType.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {linkType.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
