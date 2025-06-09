class DefaultAuditStrategy {
  create({ fromId, toId, amount, type, status }) {
    return {
      id: Date.now().toString(),
      type,
      from: fromId,
      to: toId,
      amount,
      status,
      timestamp: new Date(),
    };
  }
}

export default DefaultAuditStrategy;
