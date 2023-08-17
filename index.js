const csv = require("csv-parser");
const fs = require("fs");
const filepath = process.argv[2];
const result = [];

const stream = fs.createReadStream(filepath).pipe(csv())

stream.on("data", (data) => {
    result.push(data)
})
stream.on("end", () => {
    const newFile = filepath.match(/.*(?=\..*$)/g)[0] + ".json";
    fs.writeFile(newFile, JSON.stringify(result), (err) => console.error(err))
})