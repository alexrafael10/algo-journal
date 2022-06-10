/* eslint-disable no-console */
enum LogLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error"
};

export class Logger {
  static getConsoleMethod = (logLevel: LogLevel) => {
    switch (logLevel) {
      case "info":
        return console.log;
      case "warn":
        return console.warn;
      case "error":
        return console.error;
    }

    return console.log;
  };

  static log(logLevel: LogLevel, ...params) {
    console.log("");
    Logger.getConsoleMethod(logLevel)(...params);
  }

  static info(...params) {
    Logger.log(LogLevel.INFO, ...params);
  }

  static warn(...params) {
    Logger.log(LogLevel.WARN, ...params);
  }

  static error(...params) {
    Logger.log(LogLevel.ERROR, ...params);
  }
}