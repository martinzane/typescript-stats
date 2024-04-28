import CsvFileReader from "./csv-file-reader";
import { dateStringToDate } from "./utils";

export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

type MatchData = [Date, string, string, number, number, MatchResult, string];

class MatchReader extends CsvFileReader<MatchData> {
  convertRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}

export default MatchReader;
