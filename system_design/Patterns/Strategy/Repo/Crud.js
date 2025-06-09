class Crud {
  constructor(repository) {
    this.repository = repository;
    this.data = new Map();
    this.autoId = 0;
  }

  findById(id) {
    if (!this.data.has(id)) return null;
    return this.data.get(id);
  }

  create(object) {
    this.autoId++;
    this.data.set(this.autoId, object);
    return this.autoId;
  }

  deleteById(id) {
    if (!this.data.has(id)) return null;
    return this.data.delete(id);
  }
}

export default Crud;
