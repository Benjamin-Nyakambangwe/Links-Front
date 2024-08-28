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

export default function NewLinkRequestForm({
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
        <Label htmlFor="anchor_text">Anchor Text</Label>
        <Input id="anchor_text" name="anchor_text" type="text" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="url">Target URL</Label>
        <Input id="url" name="url" type="text" required />
      </div>
      {/* <div className="grid gap-2">
        <Label htmlFor="price_per_link">Link Price</Label>
        <Input
          id="price_per_link"
          name="price_per_link"
          required
          type="number"
          min="1"
          step="any"
        />
      </div> */}
      <div className="grid gap-2">
        <Label htmlFor="type">Link Type</Label>
        <Select name="type" required>
          <SelectTrigger>
            <SelectValue placeholder="Please Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="do_follow">Do Follow</SelectItem>
              <SelectItem value="no_follow">No Follow</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="category">Link Category</Label>
        <Select name="category" required>
          <SelectTrigger>
            <SelectValue placeholder="Please Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="casino">Casino</SelectItem>
              <SelectItem value="sports_betting">Sports Betting</SelectItem>
              <SelectItem value="loans">Loans</SelectItem>
              <SelectItem value="dating">Dating</SelectItem>
              <SelectItem value="forex">Forex</SelectItem>
              <SelectItem value="crypto">Crypto</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Submit</Button>
      <div className="m-4">
        <h2 className="font-bold">
          Current Cost: <span className="text-main">$500</span>
        </h2>
      </div>
    </form>
  );
}
