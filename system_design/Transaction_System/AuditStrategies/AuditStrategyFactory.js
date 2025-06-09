import DefaultTransactionStrategy from "./DefaultAuditStrategy.js";

class AuditStrategyFactory {
  static create(type = "default") {
    switch (type) {
      default:
        return new DefaultTransactionStrategy();
    }
  }
}

export default AuditStrategyFactory;
