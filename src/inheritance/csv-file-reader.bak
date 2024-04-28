import { readFileSync } from "fs";

abstract class CsvFileReader<T> {
  public data: T[] = [];

  constructor(public fileName: string) {}

  abstract convertRow(row: string[]): T;

  public read(): void {
    this.data = readFileSync(this.fileName, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.convertRow);
  }
}

export default CsvFileReader;
