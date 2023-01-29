export default class MemoryStore<T> {
  #record: Record<string, T> = {};

  async keys() {
    return Object.keys(this.#record);
  }

  async getItem(key: string) {
    return this.#record[key] || null;
  }

  async setItem(key: string, value: T) {
    this.#record[key] = value;
  }
}
