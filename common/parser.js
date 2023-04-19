import * as fs from "fs";
import * as path from "path";

function parseJsonFile(filepath) {
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const pack = JSON.parse(fileContent);
  return pack;
}

function parseReqmeFolder(folderPath) {
  const packs = [];
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively parse subfolders
      const subPacks = parseReqmeFolder(filePath);
      packs.push(...subPacks);
    } else if (path.extname(file) === ".json") {
      const pack = parseJsonFile(filePath);
      packs.push(pack);
    }
  }

  return packs;
}

export function parseReqmeFolderFromRoot(path) {
  if (!path) {
    const rootPath = process.cwd();
    const reqmeFolderPath = path.join(rootPath, ".reqme");
    return parseReqmeFolder(reqmeFolderPath);
  }

  return parseReqmeFolder(path);
}
