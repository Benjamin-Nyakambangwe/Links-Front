import { create } from "zustand";

interface FilterState {
  maxPrice: number;
  minPrice: number;
  minTraffic: number;
  maxTraffic: number;
  minDR: number;
  maxDR: number;
  niche: string;
  country: string;
  linkType: string;
  updateMinPrice: (num: number) => void;
  updateMaxPrice: (num: number) => void;
  updateMinTraffic: (num: number) => void;
  updateMaxTraffic: (num: number) => void;
  updateMinDR: (num: number) => void;
  updateMaxDR: (num: number) => void;
  updateNiche: (str: string) => void;
  updateCountry: (str: string) => void;
  updateLinkType: (str: string) => void;
}

export const useFilterState = create<FilterState>((set) => ({
  minPrice: 0,
  maxPrice: 0,
  minTraffic: 0,
  maxTraffic: 0,
  minDR: 0,
  maxDR: 0,
  niche: "",
  country: "",
  linkType: "",
  updateMinPrice: (num: number) => set((state) => ({ minPrice: num })),
  updateMaxPrice: (num: number) => set((state) => ({ maxPrice: num })),
  updateMinTraffic: (num: number) => set((state) => ({ minTraffic: num })),
  updateMaxTraffic: (num: number) => set((state) => ({ maxTraffic: num })),
  updateMaxDR: (num: number) => set((state) => ({ maxDR: num })),
  updateMinDR: (num: number) => set((state) => ({ minDR: num })),
  updateNiche: (str: string) => set((state) => ({ niche: str })),
  updateCountry: (str: string) => set((state) => ({ country: str })),
  updateLinkType: (str: string) => set((state) => ({ linkType: str })),
}));
