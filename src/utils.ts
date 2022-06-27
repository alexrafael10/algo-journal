/* eslint-disable no-console */
enum LogLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

export class Logger {
  silent: boolean;

  constructor() {
    this.silent = false;
  }

  getConsoleMethod = (logLevel: LogLevel) => {
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

  log(logLevel: LogLevel, ...params) {
    if (this.silent) return;

    this.getConsoleMethod(logLevel)(...params);
  }

  info(...params) {
    this.log(LogLevel.INFO, ...params);
  }

  warn(...params) {
    this.log(LogLevel.WARN, ...params);
  }

  error(...params) {
    this.log(LogLevel.ERROR, ...params);
  }
}
