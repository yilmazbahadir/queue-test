import { Queue } from "bullmq";

export class Producer {
  queue = new Queue("Paint");

  produce() {
    setInterval(() => {
      console.log("adding to the queue:" + process.pid);
      this.queue.add("cars", {
        color: this.randomColor(),
        time: new Date().getTime(),
        fromPid: process.pid,
      });
    }, 1000);
  }

  randomColor() {
    return ["red", "green", "blue"][Math.floor(Math.random() * 3)];
  }
}
