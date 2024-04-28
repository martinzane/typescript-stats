import { readFileSync } from "fs";

const matches = readFileSync("data/football.csv", {
  encoding: "utf-8",
})
  .split("\n")
  .map((row: string): string[] => row.split(","));

console.log(matches);
