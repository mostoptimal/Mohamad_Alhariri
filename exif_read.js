const piexif = require('piexifjs');
const fs = require('fs');

const imageData = fs.readFileSync('path/to/image.jpg').toString('binary');
const exifData = piexif.load(imageData);

console.log("Camera Make:", exifData["0th"][piexif.ImageIFD.Make]);
console.log("Camera Model:", exifData["0th"][piexif.ImageIFD.Model]);
console.log("Date Taken:", exifData["0th"][piexif.ImageIFD.DateTime]);