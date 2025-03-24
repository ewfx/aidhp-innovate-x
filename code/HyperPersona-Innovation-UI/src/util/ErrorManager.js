import EventEmitter from "events";

class ErrorManager extends EventEmitter { // ✅ No duplicate declaration
  constructor() {
    super();
    this.hasNetworkError = false;
  }

  setNetworkError(status) {
    this.hasNetworkError = status;
    this.emit("networkError", this.hasNetworkError); // ✅ Emit event
  }

  getNetworkError() {
    return this.hasNetworkError;
  }
}

// Ensure only one instance is exported
export const errorManager = new ErrorManager();
