import { flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist'
const args = (process.argv.slice(2));
let call= args[0].slice(7,(args[0].length));


if (call === 'heads' || call === 'tails') {
    console.log(flipACoin(call));
} else {
    console.log("Error: no or wrong input");
    console.log("Usage: node guess-flip --call=[heads|tails]"); 
}


