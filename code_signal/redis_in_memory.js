class RedisLikeStore {
  constructor() {
    this.store = new Map(); // key -> Map(field -> { value, timestamp, ttl })
  }

  set(key, field, value) {
    if (!this.store.has(key)) this.store.set(key, new Map());
    this.store.get(key).set(field, { value });
  }

  get(key, field) {
    if (!this.store.has(key)) return null;
    const entry = this.store.get(key).get(field);
    return entry?.value ?? null;
  }

  delete(key, field) {
    if (!this.store.has(key)) return false;
    const result = this.store.get(key).delete(field);
    return result;
  }

  scanAt(key) {
    if (!this.store.has(key)) return [];

    const fieldMap = this.store.get(key);
    const fieldArray = Array.from(fieldMap.entries()).sort(([a], [b]) =>
      a.localeCompare(b)
    );

    return fieldArray.map(([field, data]) => `${field}(${data.value})`);
  }

  scanAtPrefix(key, prefix) {
    if (!this.store.has(key)) return [];

    const fieldMap = this.store.get(key);
    const fieldArray = Array.from(fieldMap.entries())
      .filter(([field]) => field.startsWith(prefix))
      .sort(([a], [b]) => a.localeCompare(b));

    return fieldArray.map(([field, data]) => `${field}(${data.value})`);
  }

  setWithTimestamp(key, field, value, timestamp) {
    if (!this.store.has(key)) this.store.set(key, new Map());
    this.store.get(key).set(field, { value, timestamp });
  }

  setWithTTL(key, field, value, timestamp, ttl) {
    if (!this.store.has(key)) this.store.set(key, new Map());
    this.store.get(key).set(field, { value, timestamp, ttl });
  }

  deleteAt(key, field, timestamp) {
    if (!this.store.has(key)) return false;
    const fieldMap = this.store.get(key);
    const entry = fieldMap.get(field);
    if (!entry || this._isExpired(entry, timestamp)) return false;
    return fieldMap.delete(field);
  }

  getAt(key, field, timestamp) {
    if (!this.store.has(key)) return null;
    const fieldMap = this.store.get(key);
    const entry = fieldMap.get(field);
    if (!entry) return null;
    if (this._isExpired(entry, timestamp)) return null;
    return entry.value;
  }

  scanAt(key, timestamp) {
    if (!this.store.has(key)) return [];
    const fieldMap = this.store.get(key);
    const fieldArray = Array.from(fieldMap.entries())
      .filter(([_, entry]) => !this._isExpired(entry, timestamp))
      .sort(([a], [b]) => a.localeCompare(b));

    return fieldArray.map(([field, entry]) => `${field}(${entry.value})`);
  }

  scanAtPrefix(key, prefix, timestamp) {
    if (!this.store.has(key)) return [];
    const fieldMap = this.store.get(key);
    const fieldArray = Array.from(fieldMap.entries())
      .filter(
        ([field, entry]) =>
          field.startsWith(prefix) && !this._isExpired(entry, timestamp)
      )
      .sort(([a], [b]) => a.localeCompare(b));

    return fieldArray.map(([field, entry]) => `${field}(${entry.value})`);
  }

  _isExpired(entry, timestamp) {
    return entry.ttl !== undefined && entry.timestamp + entry.ttl <= timestamp;
  }
}
