export const createError = (code: string, message: string, status = 500) => {
  return class extends Error {
    code = code.toLowerCase();
    status = status;

    constructor(options?: ErrorOptions) {
      super(message, options);
    }

    override toString() {
      return `${this.name} [${this.code}]: ${this.message}`;
    }
  };
};
