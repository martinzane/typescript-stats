import CsvFileReader from "./csv-file-reader";
import MatchReader from "./match-reader";

const csvFileReader = new CsvFileReader("data/football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(matchReader.matches);
