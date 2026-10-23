export type Footprint = {
  year: number;
  village: string;
  province: string;
};

// TODO: replace with the real list of the 12 partner villages
export const footprints: Footprint[] = Array.from({ length: 12 }, (_, i) => ({
  year: 2027 - i,
  village: i === 0 ? "Way Kambas" : "Village",
  province: i === 0 ? "Lampung" : "Province",
}));
