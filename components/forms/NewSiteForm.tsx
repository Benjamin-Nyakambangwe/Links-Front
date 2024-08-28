"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { submitForm } from "@/lib/submitFormAction";

export default function NewSiteForm({
  className,
}: React.ComponentProps<"form">) {
  const multiplierOptions = [
    { value: "1", label: "None" },
    { value: "1.5", label: "1.5" },
    { value: "1.75", label: "1.75" },
    { value: "2", label: "2.0" },
    { value: "2.5", label: "2.5" },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await submitForm(formData);
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  return (
    <form
      className={cn("grid items-start gap-4", className)}
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Site Name</Label>
        <Input id="name" name="name" type="text" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="domain">Domain Name</Label>
        <Input id="domain" name="domain" type="text" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="price_per_link">Link Price</Label>
        <Input
          id="price_per_link"
          name="price_per_link"
          required
          type="number"
          min="1"
          step="any"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="niche">Website Niche</Label>
        <Select name="niche_id" required>
          <SelectTrigger>
            <SelectValue placeholder="Please Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">Education</SelectItem>
              <SelectItem value="2">Health</SelectItem>
              <SelectItem value="3">Sports</SelectItem>
              <SelectItem value="4">Travel</SelectItem>
              <SelectItem value="5">Gaming</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {["casino", "sports_betting", "loans", "dating", "forex", "crypto"].map(
        (item) => (
          <div key={item} className="flex items-center space-x-2">
            <Checkbox id={`support_${item}`} name={`support_${item}`} />
            <Label
              htmlFor={`support_${item}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Support{" "}
              {item.charAt(0).toUpperCase() + item.slice(1).replace("_", " ")}
            </Label>
            <Select name={`${item}_multiplier`}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Multiplier" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {multiplierOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
}
