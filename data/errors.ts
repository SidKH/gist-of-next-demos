export class NotAuthorizedError extends Error {
  constructor() {
    super("Not authorized to access this resource");
  }
}

export class NotFoundError extends Error {
  constructor() {
    super("Resource not found");
  }
}
