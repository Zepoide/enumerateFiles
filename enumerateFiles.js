const fs = require('fs');
const path = "AI-data/Google-Earth-Imgs/";

function enumerateFiles() {
    const fileNames = getCurrentFilenames();
    let i = 0;
    const startingPoint = 400;
    fileNames.forEach(file => {
        fs.rename(path + file, path + (startingPoint + i), () => {
            console.log("Files Renamed");
        });
        i++;
    });
}

function getCurrentFilenames() {
    console.log("Current filenames:");
    const list = fs.readdirSync(path);
    list.forEach(file => {
        console.log(file);
    });
    return list;
}

enumerateFiles();
