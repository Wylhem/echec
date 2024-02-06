class NoMove extends Error {
  constructor(message?: string) {
    super(message || "No Move Allowed");
    this.name = "NoMovesAllowed";
  }
}
