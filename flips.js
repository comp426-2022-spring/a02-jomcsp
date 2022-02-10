import { coinFlips } from "./modules/coin.mjs";
import minimist from 'minimist'
const args = (process.argv.slice(2));
let num = 0
if (args.length > 0) {
    num = args[0].slice(9,(args[0].length));
} else {
    num = 1;
}

console.log(coinFlips(num));