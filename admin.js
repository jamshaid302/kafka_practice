import kafka from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log("Admin Connecting...");
  await admin.connect();
  console.log("Admin Connected successfully...");

  console.log("Creating Topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic [rider-updates] created successfully...");

  console.log("Admin disconnecting...");
  await admin.disconnect();
  console.log("Admin disconected successfully...");
}

init();
