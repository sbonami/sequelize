'use strict';

const BaseError = require('./base-error');

/**
 * Thrown when an association is improperly constructed (see message for details)
 */
class AggregateError extends BaseError {
  constructor(message) {
    super(message);
    this.name = 'SequelizeAggregationError';
    this.errors = [];
  }

  add(error) {
    this.errors.push(error);
  }
}

module.exports = AggregateError;
