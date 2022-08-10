class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = []
      FancyLogger.instance = this
    }
    return FancyLogger.instance
  }

  log(message) {
    this.logs.push(message)
    console.log(`FANCY: ${message}`)
  }

  printLogCount() {
    console.log(`Total amount of logs logged so far: ${this.logs.length}`)
  }
}

const logger = new FancyLogger()
Object.freeze(logger)

export default logger