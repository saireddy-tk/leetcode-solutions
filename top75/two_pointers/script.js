const fs = require("fs");
const path = require("path");

const directoryPath = "./";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading the directory:", err);
    return;
  }

  files.forEach((file) => {
    const fileMatch = file.match(/^(.+)_([0-9]+)\.(js|py)$/);
    if (fileMatch) {
      const baseName = fileMatch[1];
      const number = fileMatch[2];
      const extension = fileMatch[3];

      const oldPath = path.join(directoryPath, file);
      const newFileName = `${number}_${baseName}.${extension}`;
      const newPath = path.join(directoryPath, newFileName);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming file ${file}:`, err);
        } else {
          console.log(`Renamed: ${file} -> ${newFileName}`);
        }
      });
    }
  });
});
