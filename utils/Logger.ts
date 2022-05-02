enum LogLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

export class Logger {
  name = "";

  constructor(name = "") {
    this.name = name;
  }

  private COLOR_RESET = "\x1b[0m";
  private COLOR_RED = "\x1b[31m";
  private COLOR_YELLOW = "\x1b[33m";
  private COLOR_WHITE = "\x1b[37m";

  private get LOG_LEVEL_BY_COLOR() {
    return {
      reset: this.COLOR_RESET,
      [LogLevel.INFO]: this.COLOR_WHITE,
      [LogLevel.WARN]: this.COLOR_YELLOW,
      [LogLevel.ERROR]: this.COLOR_RED,
    };
  }

  private get loggerName() {
    if (!this.name) return "";
    return "[" + this.name + "]";
  }

  private getConsoleMethod = (logLevel: LogLevel) => {
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
    const consoleLogger = this.getConsoleMethod(logLevel);

    consoleLogger(
      this.LOG_LEVEL_BY_COLOR[logLevel] +
        "|" +
        this.LOG_LEVEL_BY_COLOR["reset"],
      this.loggerName,
      ...params
    );
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
