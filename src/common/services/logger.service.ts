import { Color } from "custom-console-colors";

import { LogLevel } from "../enums";
import { FormatOptions } from "../interfaces";
import { padding } from "../utils";

export class LoggerService {
  private _defaultFormat =
    "[%app% - %pid%]: %event% - %timestamp%: %context% %message%";
  private _defaultOptions = {
    useFormat: true,
    useAppName: true,
    usePID: true,
    useEvent: true,
    useTimestamp: true,
    useContext: true,
    usePadding: true,
  };

  constructor(private readonly _options?: FormatOptions) {
    this._options = Object.assign(this._defaultOptions, this._options);
  }

  log(message: string): void {
    this._logMessage(message);
  }

  debug(message: string): void {
    this._logMessage(message, LogLevel.DEBUG, Color.brightBlack);
  }

  error(message: string): void {
    this._logMessage(message, LogLevel.ERROR, Color.red);
  }

  info(message: string): void {
    this._logMessage(message, LogLevel.INFO, Color.green);
  }

  warn(message: string): void {
    this._logMessage(message, LogLevel.WARM, Color.yellow);
  }

  private _logMessage(
    message: string,
    level: LogLevel = LogLevel.LOG,
    color: Function = Color.brightBlack,
    contextColor: Function = Color.white
  ) {
    let formattedMessage: string;
    if (
      typeof this._options.useFormat === "boolean" &&
      this._options.useFormat === true
    ) {
      formattedMessage = this._defaultFormat;
    } else if (
      typeof this._options.useFormat === "string" &&
      this._options.useFormat.length
    ) {
      formattedMessage = this._options.useFormat;
    } else {
      formattedMessage = message;
    }

    if (this._options.useFormat) {
      // Show APP name
      if (
        typeof this._options.useAppName === "boolean" &&
        this._options.useAppName === true
      ) {
        formattedMessage = formattedMessage.replace("%app%", "CLS");
      } else if (
        typeof this._options.useAppName === "string" &&
        this._options.useAppName.length
      ) {
        formattedMessage = formattedMessage.replace(
          "%app%",
          this._options.useAppName.toUpperCase()
        );
      } else {
        formattedMessage = formattedMessage.replace("%app%", "");
      }

      // Show PID
      if (this._options.usePID) {
        if (this._options.useAppName) {
          formattedMessage = formattedMessage.replace(
            "%pid%",
            process.pid.toString()
          );
        } else {
          formattedMessage = formattedMessage.replace(
            " - %pid%",
            process.pid.toString()
          );
        }
      } else {
        if (this._options.useAppName) {
          formattedMessage = formattedMessage.replace(" - %pid%", "");
        } else {
          formattedMessage = formattedMessage.replace("[ - %pid%]: ", "");
        }
      }

      // Show event
      if (this._options.useEvent) {
        formattedMessage = formattedMessage.replace(
          "%event%",
          Color.bold(padding(LogLevel[level].toString()))
        );
      } else {
        formattedMessage = formattedMessage.replace("%event% - ", "");
      }

      // Show timestamp
      if (
        typeof this._options.useTimestamp === "boolean" &&
        this._options.useTimestamp === true
      ) {
        formattedMessage = formattedMessage.replace(
          "%timestamp%",
          new Date(Date.now()).toLocaleDateString()
        );
      } else {
        formattedMessage = formattedMessage.replace("%timestamp%: ", "");
      }

      // Show context
      if (
        typeof this._options.useContext === "boolean" &&
        this._options.useContext === true
      ) {
        formattedMessage = formattedMessage.replace(
          "%context%",
          contextColor("APP")
        );
      } else if (
        typeof this._options.useContext === "string" &&
        this._options.useContext.length
      ) {
        formattedMessage = formattedMessage.replace(
          "%context%",
          contextColor(this._options.useContext.toUpperCase())
        );
      } else {
        formattedMessage = formattedMessage.replace("%context %", "");
      }
      formattedMessage = formattedMessage.replace("%message%", color(message));
    }
    formattedMessage += "\n";
    process.stdout.write(color(formattedMessage));
  }
}
