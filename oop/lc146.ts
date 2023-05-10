class LRUCache {
  capacity: number;
  #cache: Map<number, number>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.#cache = new Map();
  }
  getItem(key: number): number {
    const itemVal = this.#cache.get(key);
    if (itemVal) {
      this.#cache.delete(key);
      this.#cache.set(key, itemVal);
      return itemVal;
    }
    return -1;
  }
  putItem(key: number, value: number): void {
    if (this.#cache.has(key)) {
      this.#cache.delete(key);
    } else if (this.#cache.size === this.capacity) {
      const oldestKey = this.oldestItem;
      this.#cache.delete(oldestKey);
      console.log("deletion");
    }
    this.#cache.set(key, value);
    console.log("size: ", this.#cache.size);
  }
  get oldestItem() {
    return this.#cache.keys().next().value;
  }
}

// const cache1 = new LRUCache(3);
// cache1.putItem(1, 10);
// cache1.putItem(2, 20);
// cache1.putItem(3, 30);
// cache1.getItem(2);
// cache1.putItem(4, 40);
// cache1.putItem(5, 50);
// console.log(cache1.getItem(1));
// console.log(cache1.getItem(2));
// console.log(cache1.getItem(3));
// console.log(cache1.getItem(4));
// console.log(cache1);
