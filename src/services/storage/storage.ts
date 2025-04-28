interface IStorage {
  getItem(key: string): string | null;
  setItem(Key: string, value: string): void;
  setMultipleItems(items: Array<IStorageItem>): void;
  removeItem(key: string): void;
  clear(): void;
}

export interface IStorageItem {
  key: string;
  value: string | any;
}

/**
 * Get and update browser storage
 */
class Storage implements IStorage {
  private store: any;

  constructor(store: any) {
    this.store = store;
  }

  getItem(key: IStorageItem["key"]): IStorageItem["key"] {
    return this.store.getItem(key);
  }

  getParsedItem(key: IStorageItem["key"]): IStorageItem["value"] | null {
    try {
      const parsedItem = JSON.parse(this.store.getItem(key));
      return parsedItem;
    } catch (err: any) {
      console.log("Error: ", err.message);
      return null;
    }
  }

  setItem(key: IStorageItem["key"], value: IStorageItem["value"]): void {
    this.store.setItem(key, value);
  }

  setMultipleItems(items: Array<IStorageItem>): void {
    if (!items.length) {
      throw new Error("Items must be an array");
    }

    items.forEach((item: IStorageItem) => {
      this.setItem(item.key, item.value);
    });
  }

  setStringifyItem(
    key: IStorageItem["key"],
    value: IStorageItem["value"]
  ): void {
    this.store.setItem(key, JSON.stringify(value));
  }

  removeItem(key: IStorageItem["key"]): void {
    this.store.removeItem(key);
  }

  clear(): void {
    this.store.clear();
  }
}

export default Storage;
