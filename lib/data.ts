export function getTheAnswer() {
  /**
   * 🔮
   * secret internal business logic
   * that should not be exposed to the client
   */
  if (Math.random() < 0.5) {
    return "You are right";
  } else {
    return "You are wrong";
  }
}
