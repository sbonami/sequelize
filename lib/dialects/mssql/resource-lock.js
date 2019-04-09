'use strict';

class ResourceLock {
  constructor(resource) {
    this.resource = resource;
    this.previous = Promise.resolve(resource);
  }

  unwrap() {
    return this.resource;
  }

  async lock(fn) {
    try {
      await this.previous;
    } catch (err) {
      // swallow
    }
    return this.previous = fn(this.resource);
  }
}

module.exports = ResourceLock;
