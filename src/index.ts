import WinsAnalysis from "./analyzers/wins-analysis";
import CsvFileReader from "./csv-file-reader";
import MatchReader from "./match-reader";
import ConsoleReport from "./report-targets/console-report";
import Summary from "./summary";

const csvFileReader = new CsvFileReader("data/football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.generate(matchReader.matches);
