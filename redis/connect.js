const host = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const redis = require("redis");
const client = redis.createClient(host);

client.on("connect", () => console.log("connected to redis"));
client.on("error", error => console.log("redis error \n===========" + error));

module.exports = client;
