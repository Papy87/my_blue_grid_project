import path from "path";
import { ApiData, ItemData, SortedData } from "../models/responseData";

export const transformData = (responseData: ApiData): SortedData => {
  const result: SortedData = {};
  const items: ItemData[] = responseData.items;
  items.forEach((item: ItemData) => {
    const fileUrl: string = item.fileUrl;
    const urlParts = fileUrl.replace("http://", "").split("/");
    const lastElement = urlParts[urlParts.length - 1];
    // Remove the last element if it is an empty string
    if (lastElement === "") {
      urlParts.pop();
    }
    const [ip, ...pathParts] = urlParts;
    let topLevel = (result[ip] = result[ip] || []);
    for (let i = 0; i < pathParts.length; i++) {
      const directory = pathParts[i];
      const isFile: boolean = isPathAFile(directory);
      if (isFile) {
        topLevel.push(directory);
        continue;
      }

      let nextLevel = topLevel.find(
        (item: any) => typeof item === "object" && item[directory]
      );
      if (!nextLevel) {
        nextLevel = { [directory]: [] };
        topLevel.push(nextLevel);
      }
      topLevel = nextLevel[directory];
    }
  });
  const sortedData = sortAPIData(result);
  return sortedData;
};

const isPathAFile = (direcory: string): boolean => {
  // Use the path module to get the extension without the dot
  const extension = path.extname(direcory).slice(1);
  // Check if the extension is valid
  const isValidFileExtension =
    extension.length >= 1 &&
    extension.length <= 4 &&
    /^[^A-Z0-9]/.test(extension);

  return isValidFileExtension;
};
const sortAPIData = (data: SortedData): SortedData => {
  const sortedObj: SortedData = {};

  for (const key in data) {
    // Check if the key is a property of the object
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const items = data[key];
      const files: string[] = [];
      const directories: SortedData[] = [];
      items.forEach(item => {
        //Check if the item is a string or object
        if (typeof item === 'string') {
          files.push(item);
        } else if (typeof item === 'object' && item !== null) {
          const insideItem = sortAPIData(item as SortedData);
          directories.push(insideItem);
        }
      });

      sortedObj[key] = [...directories, ...files];
    }
  }

  return sortedObj;
};

