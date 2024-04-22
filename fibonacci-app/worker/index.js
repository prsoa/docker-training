import { redisHost, redisPort } from "./keys.js";
import { createClient } from "redis";

const redisClient = await createClient({
  url: `redis://${redisHost}:${redisPort}`,
  retry_strategy: () => 1000,
})
  .connect()
  .catch(console.error);

const sub = redisClient.duplicate();
await sub.connect();

sub.subscribe("insert", (message) => {
  redisClient.hSet("values", message, fib(parseInt(message)));
});

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}
