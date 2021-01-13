import { Producer } from "./Producer";
import { Consumer } from "./Consumer";

const argsObj: any = (() => {
  const args = {};
  console.log("Args:" + JSON.stringify(process.argv.slice(3)));
  process.argv.slice(3).map((element) => {
    const matches = element.match("([a-zA-Z0-9]+)=(.*)");
    if (matches) {
      args[matches[1]] = matches[2].replace(/^['"]/, "").replace(/['"]$/, "");
    }
  });
  return args;
})();
if (argsObj.enableProducer == "true") {
  console.log("Creating producer ...");
  const producer = new Producer();
  producer.produce();
}

if (argsObj.enableConsumer == "true") {
  console.log("Creating consumer ...");
  const consumer = new Consumer();
}
