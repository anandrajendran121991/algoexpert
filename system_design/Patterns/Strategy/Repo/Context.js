class Context {
  constructor(repo) {
    this.repo = repo;
  }

  findById(id) {
    return this.repo.findById(id);
  }

  create(array) {
    return this.repo.create(array);
  }

  update(id, array) {
    return this.repo.update(id, array);
  }

  deleteById(id) {
    return this.repo.deleteById(id);
  }

  getById(id) {
    return this.repo.getById(id);
  }
}

export default Context;
