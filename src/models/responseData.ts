interface ApiData {
  items: Array<ItemData>;
}

interface ItemData {
  fileUrl: string;
}

interface SortedData {
  [key: string]: Array<any>;
}

export { ApiData, ItemData, SortedData };
