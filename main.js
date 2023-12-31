const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");

IOhandler.unzip(zipFilePath, pathUnzipped)
  .then(() => IOhandler.readDir(pathUnzipped))
  .then((pngFiles) => {
    const grayscale_promises = pngFiles.map((png_file) => {
      return IOhandler.grayScale(png_file, pathProcessed);
    });
    return Promise.all(grayscale_promises);
  })
  .then(() => console.log("Grayscale Processing Done!"))
  .catch((err) => console.log(err));
