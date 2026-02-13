const Logger = (function (){
    // Privado
    const levels = {
        error: 0,
        warn: 1,
        info: 2
    };


    let currentLvl = levels.info;
    let outputMode = "console"; 
    let logFilePath = "./app.log";

    const fs = require("fs");

    function shouldLog(level) {
    return levels[level] <= currentLevel;
    }

    function writeToConsole(level, message){

    }

    function writeToFile(level, message){

    }

    function log(level, message){

    }



})