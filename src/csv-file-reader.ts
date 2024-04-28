import { readFileSync } from "fs";
import { dateStringToDate } from "./utils";
import { Result } from "./types";
class CsvFileReader {
  public data: string[][] = [];

  constructor(public fileName: string) {}

  public read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map((row: string[]): any => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as Result,
          row[6],
        ];
      });
  }
}

export default CsvFileReader;
