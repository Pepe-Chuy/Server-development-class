
// Usamos IIFE/Funcion autoejecutable para el logger
const Logger = (function (){
    // Privado

    //niveles de prioridad para los logs
    const levels = {
        error: 0,
        warn: 1,
        info: 2
    };


    let currentLvl = levels.info; //nivel, default: info
    let outputMode = "console"; 
    let logFilePath = "./app.log";

    const fs = require("fs");

    function shouldLog(level) {
        // comparamos niveles
        return levels[level] <= currentLvl;
    }

    function writeToConsole(level, message){
        console[level](`[${level.toUpperCase()}] ${message}`);

    }

    function writeToFile(level, message){
        // Mensaje con fecha en ISO
        const logMessage = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}\n`;
        fs.appendFileSync(logFilePath, logMessage);

    }

    // Handler o funcion main para registrar los logs
    function log(level, message){
        if (!shouldLog(level)) return;

        if (outputMode === "console") {
            writeToConsole(level, message);
        } else if (outputMode === "file") {
            writeToFile(level, message);
    }
  }


  // Público, API para registrar los 3 tipos o cambiar el nivel
  return {
    info(message) {
      log("info", message);
    },
    warn(message) {
      log("warn", message);
    },
    error(message) {
      log("error", message);
    },
    setLevel(level) {
      if (levels[level] !== undefined) {
        currentLvl = levels[level];
      }
    },
    setOutput(mode, filePath) {
      if (mode === "console" || mode === "file") {
        outputMode = mode;
      }
      if (filePath) {
        logFilePath = filePath;
      }
    }
  };
})();



///// USO

Logger.setLevel("warn"); // Solo warn y error
Logger.setOutput("console");

Logger.info("Info q no se enseña");
Logger.warn("Esto es un warning");
Logger.error("Esto es un error");


Logger.setOutput("file", "./logs.txt");
Logger.setLevel("info");

Logger.info("Mensaje guardado en archivo");
Logger.error("Error guardado en archivo");
