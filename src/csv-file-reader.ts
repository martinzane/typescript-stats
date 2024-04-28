import { readFileSync } from "fs";

class CsvFileReader {
  public data: string[][] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}

export default CsvFileReader;
