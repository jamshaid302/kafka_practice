import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "kafka-app",
  brokers: ["<IP_ADDRESS>:9092"],
});

export default kafka;

// docker run -p 9092:9092 \
// -e KAFKA_ZOOKEEPER_CONNECT=<IP_ADDRESS>:2181 \
// -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<IP_ADDRESS>:9092 \
// -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
// confluentinc/cp-kafka
