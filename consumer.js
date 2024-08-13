import kafka from "./client.js";
const group = process.argv[2];

async function init() {
  const consumer = kafka.consumer({ groupId: group });

  console.log("Connecting Consumer...");
  await consumer.connect();
  console.log("Consumer connected successfully...");

  await consumer.subscribe({
    topics: ["rider-updates"],
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `GROUP: ${group}, TOPIC: ${topic}, PARTITION: ${partition}, MESSAGE: ${message.value.toString()}`
      );
    },
  });
}

init();
