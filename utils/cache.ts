import { createClient, type RedisClientType } from "redis";

export class Cache {
  public client: RedisClientType;

  constructor() {
    this.client = createClient();
    this.client.on("error", (err) => console.error("Redis Client Error", err));
  }

  public async connect(): Promise<void> {
    if (!this.client.isOpen) {
      await this.client.connect();
      console.log("Connected to Redis");
    }
  }

  public async disconnect(): Promise<void> {
    if (this.client.isOpen) {
      await this.client.quit();
      console.log("Disconnected from Redis");
    }
  }

  public async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  public async set(
    key: string,
    value: string,
    expireInSeconds?: number
  ): Promise<void> {
    if (expireInSeconds) {
      await this.client.setEx(key, expireInSeconds, value);
    } else {
      await this.client.set(key, value);
    }
  }

  public async clearCache(): Promise<void> {
    await this.connect();
    await this.client.flushAll();
    console.log("Cache was cleared");
    await this.client.quit();
  }
}
