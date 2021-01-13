import { Worker } from "bullmq";

export class Consumer {
  worker = new Worker("Paint", async (job) => {
    if (job.name === "cars") {
      console.log(
        "Color:" +
          job.data.color +
          ", time:" +
          job.data.time +
          ", fromdPid:" +
          job.data.fromPid,
        ", consumedPid:" + process.pid
      );
    }
  });
}
